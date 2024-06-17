import React, { useState, useEffect } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

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
          days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
          hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0"),
          minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0"),
          seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0"),
        });
      }
    };

    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [product.startTime]);

  return (
    <div
      className={`absolute bottom-0 flex w-full bg-[#1F2230] gap-1 p-2 py-1 items-center justify-center ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex text-white items-center justify-center p-1 px-3 flex-col rounded-md border ${isHovered ? "border-green-500" : "border-[#929399]"}`}>
        <div className={`font-normal ${isHovered ? "text-green-500" : "text-[#e1e2e7]"}`}>{time.days}</div>
        <div className={`text-[8px] ${isHovered ? "text-green-500" : "text-[#e1e2e7]"}`}>Days</div>
      </div>
      <div className={`flex text-white items-center justify-center p-1 px-3 flex-col rounded-md border ${isHovered ? "border-green-500" : "border-[#929399]"}`}>
        <div className={`font-normal ${isHovered ? "text-green-500" : "text-[#e1e2e7]"}`}>{time.hours}</div>
        <div className={`text-[8px] ${isHovered ? "text-green-500" : "text-[#e1e2e7]"}`}>Hours</div>
      </div>
      <div className={`flex text-white items-center justify-center p-1 px-3 flex-col rounded-md border ${isHovered ? "border-green-500" : "border-[#929399]"}`}>
        <div className={`font-normal ${isHovered ? "text-green-500" : "text-[#e1e2e7]"}`}>{time.minutes}</div>
        <div className={`text-[8px] ${isHovered ? "text-green-500" : "text-[#e1e2e7]"}`}>Minutes</div>
      </div>
      <div className={`flex text-white items-center justify-center p-1 px-3 flex-col rounded-md border ${isHovered ? "border-green-500" : "border-[#929399]"}`}>
        <div className={`font-normal ${isHovered ? "text-green-500" : "text-[#e1e2e7]"}`}>{time.seconds}</div>
        <div className={`text-[8px] ${isHovered ? "text-green-500" : "text-[#e1e2e7]"}`}>Seconds</div>
      </div>
    </div>
  );
}
