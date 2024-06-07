"use client";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useClient from "../hooks/SocketClient";

interface ProductProps {
  data: {
    currentPrice: number;
    startPrice: number;
  };
}

export default function PlaceBid({ product }: { product: ProductProps }) {
  const [bidAmount, setBidAmount] = useState(product?.data?.currentPrice);
  const socket = useClient('http://localhost:3001'); // Pass the server URL to the custom hook

  const incrementBidAmount = () => {
    setBidAmount((prev) => prev + 20);
  };

  const decrementBidAmount = () => {
    if (bidAmount > product?.data?.currentPrice) {
      setBidAmount((prev) => prev - 20);
    } else {
      toast.error(
        "Minimum bid amount is $" + product?.data?.currentPrice + ".00"
      );
    }
  };

  useEffect(() => {
    setBidAmount(product?.data?.currentPrice);
  }, [product?.data?.currentPrice]);

  const placeBid = () => {
    toast.success("Bid placed successfully!");
    socket.emit('bid', { currentPrice:bidAmount, productId:product?.data?._id, userId:1});
  };

  useEffect(() => {
    if (!socket) {
      console.log('Socket not connected');
      return;
    }

    socket.on('connect', () => {
      console.log('A user Connected...');
    });

    // recive a broadcasted message from server
    socket.on('bidPlaced', (data) => {
      console.log('Broadcasted message from server', data);
    });

    return () => {
      socket.off('connect');
    };
  }, [socket]);


  return (
    <div className="border border-gray-100 p-4 pt-3 max-w-md rounded-md shadow-md">
      <div className="font-bold text-xl pb-[2px] text-gray-950">Base Price: ${product?.data?.startPrice}.00</div>
      <div className="text-xs text-gray-500 font-medium pb-2">
        Bid Amount : Minimum Bid &nbsp;(+$20.00)
      </div>
      <div className="relative space-x-1 mt-[3px] mb-4">
        <div className="text-xs text-gray-500 font-medium w-[40px] bg-[#32c36c] p-[1px] absolute -top-2 rounded-full"></div>
        <div className="text-xs text-gray-500 font-medium w-[5px] bg-[#32c36c] p-[1px] absolute -top-2 left-10 rounded-full"></div>
      </div>
      <div className="flex gap-2">
        <form className="flex border items-center w-fit">
          <button
            type="button"
            className="p-3 py-2"
            onClick={decrementBidAmount}
          >
            <FiMinus className="w-3 h-4 text-gray-90" />
          </button>
          <input
            type="text"
            className="text-center text-gray-700 outline-none border-none text-xs font-sans mx-2"
            value={`$${bidAmount}.00`}
          />
          <button
            type="button"
            className="p-3 py-2"
            onClick={incrementBidAmount}
          >
            <FiPlus className="w-3 h-4 text-gray-900" />
          </button>
        </form>
        <AlertDialog>
          <AlertDialogTrigger className="border flex items-center justify-center w-full rounded-[4px] px-3 py-1 text-xs bg-[#32c36c] hover:bg-green-600 text-gray-100 capitalize font-semibold">
            Place a bid
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you wanted to bid an amount of ${bidAmount}?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will lead you to the highest
                bidder of this product so are you sure of that?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => {}}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={placeBid}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}