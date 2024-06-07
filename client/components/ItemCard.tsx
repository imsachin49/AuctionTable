"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoShareAndroid } from "react-icons/go";

interface IProduct {
  id: number;
  name: string;
  startPrice: number;
  startTime: number; // Assuming startTime is a Unix timestamp in milliseconds
  endTime: number; // Assuming endTime is a Unix timestamp in milliseconds
  _id: string;
}

export default function ItemCard({ product }: { product: IProduct }) {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = Date.now();
      const startTime = product.startTime;
      const endTime = product.endTime;

      if (now > endTime) {
        setTimeRemaining("Auction ended");
        return;
      }

      const diff = startTime - now;

      if (diff <= 0) {
        setTimeRemaining("Auction started");
        // If the auction has already started, we can show the auction ends in..
        return;
      }

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30);
      const years = Math.floor(days / 365);
      console.log({
        "years": years,
        "months": months,
        "weeks": weeks,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
      })

      if (years >= 1) {
        setTimeRemaining(`${years} year${years > 1 ? 's' : ''} to go`);
      } else if (months >= 1) {
        setTimeRemaining(`${months} month${months > 1 ? 's' : ''} to go`);
      } else if (weeks >= 1) {
        setTimeRemaining(`${weeks} week${weeks > 1 ? 's' : ''} to go`);
      } else if (days >= 1) {
        setTimeRemaining(`${days} day${days > 1 ? 's' : ''} left`);
      } else {
        const remainingHours = String(hours % 24).padStart(2, '0');
        const remainingMinutes = String(minutes % 60).padStart(2, '0');
        const remainingSeconds = String(seconds % 60).padStart(2, '0');
        setTimeRemaining(`${remainingHours}H : ${remainingMinutes}M : ${remainingSeconds}S`);
      }
    };

    calculateTimeRemaining();

    const timerId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timerId);
  }, [product, product?.startTime, product?.endTime]);

  return (
    <div className="border border-gray-200 w-[295px] rounded-md max-w-md">
      <div className="relative">
        <img
          src={"/Iphone.png"}
          alt="noImg"
          className="h-[200px] w-[295px] rounded-sm"
        />
        <div className="absolute bottom-[12px] flex w-full items-center justify-center">
          <span className="bg-white p-1 shadow-sm rounded-2xl w-1/2 font-gray-950 font-bold font-sans text-zinc-700 flex items-center justify-center">
            {timeRemaining}
          </span>
        </div>
      </div>

      <div className="p-2 space-y-[5px] relative w-fill">
        <p className="text-sm font-sans font-bold text-gray-700 flex p-1 pb-0 text-start px-2 cursor-pointer capitalize">
          {product?.name}
        </p>
        <div className="p-2 flex items-center justify-between py-1">
          <p className="text-xs text-zinc-500 mr-3 font-sans font-medium">
            Biding Price :{" "}
            <span className="font-bold text-gray-800">
              ${product?.startPrice}.00
            </span>
          </p>
        </div>
      </div>

      <div className="w-full flex px-3 font-sans text-sm font-medium mb-3 items-center justify-between">
        <Link
          href={`/items/${product?._id}`}
          className="w-fit border text-center rounded-[4px] px-3 py-1 text-xs bg-[#32c36c] hover:bg-green-600 text-gray-100 capitalize font-semibold"
        >
          Place a bid
        </Link>
        <button className="mr-1 border border-gray-100 rounded-full p-1 bg-gray-100 hover:bg-gray-500 hover:text-white">
          <GoShareAndroid />
        </button>
      </div>
    </div>
  );
}
