"use client";
import React from "react";
import { useState, useEffect } from "react";

interface ProductProps {
  name: string;
  currentPrice: number;
  _id: string;
  pictures: string[];
  startTime: number;
}

export default function TimeLeft({ product }: { product: ProductProps }) {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = product.startTime - now;

      if (distance < 0) {
        setTime({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        setTime({
          days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0"
          ),
          hours: String(
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ).padStart(2, "0"),
          minutes: String(
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          ).padStart(2, "0"),
          seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
            2,
            "0"
          ),
        });
      }
    };

    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [product.startTime]);

  return (
    <div className="absolute bottom-0 flex w-full bg-[#1F2230] gap-1 p-2 py-1 items-center justify-center">
      <div className="flex text-white items-center justify-center p-1 px-3 flex-col rounded-md border border-[#929399]">
        <div className="font-normal">{time.days}</div>
        <div className="text-[8px]">Days</div>
      </div>
      <div className="flex text-white items-center justify-center p-1 px-3 flex-col rounded-md border border-[#929399]">
        <div className="font-normal">{time.hours}</div>
        <div className="text-[8px]">Hours</div>
      </div>
      <div className="flex text-white items-center justify-center p-1 px-3 flex-col rounded-md border border-[#929399]">
        <div className="font-normal">{time.minutes}</div>
        <div className="text-[8px]">Minutes</div>
      </div>
      <div className="flex text-white items-center justify-center p-1 px-3 flex-col rounded-md border border-[#929399]">
        <div className="font-normal">{time.seconds}</div>
        <div className="text-[8px]">Seconds</div>
      </div>
    </div>
  );
}
