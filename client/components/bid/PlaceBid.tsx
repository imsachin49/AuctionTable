"use client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useSocket } from "../providers/socket-provider";
import { LuLoader2 } from "react-icons/lu";
import { BidAmountInput } from "./PlaceBidForm";
import { BidConfirmationDialog } from "./BidConfirmationDialog";
import BidButton from "./PlaceBidButton";

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

const PlaceBid = ({ product }: { product: ProductProps }) => {
  const [bidAmount, setBidAmount] = useState(product?.data?.currentPrice);
  const { data: session } = useSession();
  const { socket } = useSocket();
  console.log("token", session?.user?.token);

  useEffect(() => {
    setBidAmount(product?.data?.currentPrice);
  }, [product?.data]);

  const placeBid = () => {
    try {
      if (!session) return;
      if (bidAmount <= product?.data?.currentPrice) {
        toast.error(
          "Bid amount should be greater than the current price=" +
            product?.data?.currentPrice +
            ",bidAmount=" +
            bidAmount
        );
        return;
      }
      if (socket) {
        socket.emit("bid", {
          currentPrice: bidAmount,
          productId: product?.data?._id,
          userId: session?.user?.id,
        });
      } else {
        toast.error("Socket connection failed!");
      }
    } catch (error) {
      console.error("Error placing bid", error);
      toast.error("Error placing bid");
    }
  };

  useEffect(() => {
    if (!socket) {
      return;
    }

    const handleConnect = () => {
      console.log("A user Connected...");
    };

    const handleBidPlaced = (data: any) => {
      console.log("Broadcasted message from server", data);
      if (data.data.productId === product.data._id) {
        setBidAmount(data.data.currentPrice);
        toast.success(data?.message);
      }
    };

    const handleBidRejected = (data: any) => {
      setBidAmount(product?.data?.currentPrice);
      console.log("Bid rejected message from server");
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
  }, [socket, product?.data?._id]);

  return (
    <div className="border border-gray-100 p-4 pt-3 w-full rounded-md shadow-md">
      <div className="font-bold text-xl pb-[2px] text-gray-950">
        Base Price: ${product?.data?.startPrice}.00
      </div>
      <div className="text-xs text-gray-500 font-medium pb-2">
        Bid Amount : Minimum Bid &nbsp;(+ $20.00)
      </div>
      <div className="relative space-x-1 mt-[3px] mb-4">
        <div className="text-xs text-gray-500 font-medium w-[40px] bg-[#32c36c] p-[1px] absolute -top-2 rounded-full"></div>
        <div className="text-xs text-gray-500 font-medium w-[5px] bg-[#32c36c] p-[1px] absolute -top-2 left-10 rounded-full"></div>
      </div>
      <div className="flex gap-2  flex-wrap">
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

export default PlaceBid;
