"use client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useSocket } from "../providers/socket-provider";
import { BidAmountInput } from "./PlaceBidForm";
import BidButton from "./PlaceBidButton";
import PlaceBidSkeleton from "../skeletons/PlaceBidSkeleton";

interface ProductProps {
  data: {
    currentPrice: number;
    startPrice: number;
    _id: string;
    startTime: number;
    endTime: number;
    isLoggedIn: boolean;
  };
}

export default function PlaceBid({
  product,
  mutate,
  isLoading,
}: {
  product: ProductProps;
  mutate: any;
  isLoading: boolean;
}){
  if (isLoading) return <PlaceBidSkeleton />;
  
  const [bidAmount, setBidAmount] = useState(product?.data?.currentPrice);
  const { data: session } = useSession();
  const { socket } = useSocket();

  useEffect(() => {
    setBidAmount(product?.data?.currentPrice);
  }, [product?.data]);

  const placeBid = () => {
    if (!session) return;

    if (bidAmount <= product?.data?.currentPrice) {
      toast.error("Bid amount should be greater than the current price");
      return;
    }

    if (socket) {
      const newBid = {
        _id: new Date().toISOString(),
        bidAmount: bidAmount,
        biddingTime: Date.now(),
        bidderId: {
          _id: session.user.id,
          username: session.user.name,
          avatar: session.user.image,
        },
      };

      mutate(
        (currentData: any) => {
          return {
            ...currentData,
            data: {
              ...currentData.data,
              bids: [newBid, ...currentData.data.bids],
            },
          };
        },
        false // do not revalidate yet
      );

      socket.emit("bid", {
        currentPrice: bidAmount,
        productId: product?.data?._id,
        userId: session?.user?.id,
      });

      // Revalidate after optimistic update
      mutate();
    } else {
      toast.error("Socket connection failed!");
    }
  };

  useEffect(() => {
    if (!socket) {
      return;
    }

    const handleConnect = () => {
      console.log("A user Connected...");
    };

    const handleBidPlaced = async (data: any) => {
      if (data.data.productId === product.data._id) {
        setBidAmount(data.data.currentPrice);
        toast.success(data?.message);
        await mutate();
      }
    };

    const handleBidRejected = (data: any) => {
      setBidAmount(product?.data?.currentPrice);
      toast.error(data?.message);
    };

    socket.on("connect", handleConnect);
    socket.on("bidPlaced", handleBidPlaced);
    socket.on("bidRejected", handleBidRejected);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("bidPlaced", handleBidPlaced);
      socket.off("bidRejected", handleBidRejected);
    };
  }, [socket, product?.data?._id, mutate]);

  return (
    <div className="border border-gray-100 px-2 py-3 sm:p-4 w-full rounded-md shadow-md">
      <div className="font-bold text-xl pb-[2px] text-gray-950">
        Base Price: ${product?.data?.startPrice}.00
      </div>
      <div className="text-xs text-gray-500 font-medium pb-2">
        Bid Amount : Minimum Bid &nbsp;(+ $20.00)
      </div>
      <div className="relative space-x-1 mt-[3px] mb-4">
        <div className="text-xs text-gray-500 font-medium w-[40px] bg-indigo-600 p-[1px] absolute -top-2 rounded-full"></div>
        <div className="text-xs text-gray-500 font-medium w-[5px] bg-indigo-600 p-[1px] absolute -top-2 left-10 rounded-full"></div>
      </div>
      <div className="flex gap-2 flex-wrap">
        <BidAmountInput
          bidAmount={bidAmount}
          setBidAmount={setBidAmount}
          currentPrice={product?.data?.currentPrice}
          startTime={product?.data?.startTime}
          endTime={product?.data?.endTime}
          isLoggedIn={session ? true : false}
        />
        <BidButton
          bidAmount={bidAmount}
          placeBid={placeBid}
          product={product}
        />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};