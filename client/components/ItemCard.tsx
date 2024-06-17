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
  picture: string;
  pictures: string[];
}

export default function ItemCard({ product }: { product: IProduct }) {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = Date.now();
      const startTime = new Date(product.startTime).getTime();
      const endTime = new Date(product.endTime).getTime();

      if (now > endTime) {
        setTimeRemaining("Auction ended");
        return;
      }

      if (now > startTime) {
        const diff = endTime - now;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (years >= 1) {
          setTimeRemaining(`Ends in ${years} year${years > 1 ? "s" : ""}`);
        } else if (months >= 1) {
          setTimeRemaining(`Ends in ${months} month${months > 1 ? "s" : ""}`);
        } else if (weeks >= 1) {
          setTimeRemaining(`Ends in ${weeks} week${weeks > 1 ? "s" : ""}`);
        } else if (days >= 1) {
          setTimeRemaining(`Ends in ${days} day${days > 1 ? "s" : ""}`);
        } else {
          const remainingHours = String(hours % 24).padStart(2, "0");
          const remainingMinutes = String(minutes % 60).padStart(2, "0");
          const remainingSeconds = String(seconds % 60).padStart(2, "0");
          setTimeRemaining(
            `Ends in ${remainingHours}H : ${remainingMinutes}M : ${remainingSeconds}S`
          );
        }
        return;
      }

      const diff = startTime - now;
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30);
      const years = Math.floor(days / 365);

      if (years >= 1) {
        setTimeRemaining(`${years} year${years > 1 ? "s" : ""} to go`);
      } else if (months >= 1) {
        setTimeRemaining(`${months} month${months > 1 ? "s" : ""} to go`);
      } else if (weeks >= 1) {
        setTimeRemaining(`${weeks} week${weeks > 1 ? "s" : ""} to go`);
      } else if (days >= 1) {
        setTimeRemaining(`${days} day${days > 1 ? "s" : ""} left`);
      } else {
        const remainingHours = String(hours % 24).padStart(2, "0");
        const remainingMinutes = String(minutes % 60).padStart(2, "0");
        const remainingSeconds = String(seconds % 60).padStart(2, "0");
        setTimeRemaining(
          `${remainingHours}H : ${remainingMinutes}M : ${remainingSeconds}S`
        );
      }
    };

    calculateTimeRemaining();
    const timerId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timerId);
  }, [product]);

  return (
    <div className="border border-gray-200 rounded-md w-[90%] sm:w-[295px]">
      <div className="relative">
        <img
          src={`${product?.pictures[0] || "/Iphone.png"}`}
          alt="noImg"
          className="rounded-t-md w-full h-[220px]  sm:h-[200px] sm:w-[295px]"
        />
        <div className="absolute bottom-[12px] flex w-full items-center justify-center">
          <span className="bg-white p-1 shadow-sm rounded-2xl w-4/6 font-gray-950 font-semibold font-sans text-zinc-700 flex items-center justify-center">
            {timeRemaining}
          </span>
        </div>
      </div>

      <div className="p-2 space-y-[5px] relative w-full">
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
          className="w-fit border flex items-center justify-center rounded-[4px] px-3 py-2 text-xs bg-[#32c36c] hover:bg-green-600 text-gray-100 capitalize font-semibold"
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
