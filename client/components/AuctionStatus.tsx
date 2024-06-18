"use client";
import { useState, useEffect } from "react";

interface ProductProps {
  startTime: number;
  endTime: number;
}

export default function AuctionStatus({ product }: { product: ProductProps }) {
  const [status, setStatus] = useState("Upcoming");
  const [stausColor,setstatusColor] = useState("bg-indigo-600");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const startDistance = product?.startTime - now;
      const endDistance = product?.endTime - now;

      if (endDistance < 0) {
        setStatus("Ended");
        setstatusColor("bg-[#a33434]");
      } else if (startDistance > 0) {
        setStatus("Upcoming");
        setstatusColor("bg-[#71B7BF]");
      } else {  
        setStatus("Started");
        setstatusColor("bg-indigo-600");
      }
    };

    const interval = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Run once immediately to avoid delay
    return () => clearInterval(interval);
  }, [product.startTime, product.endTime]);

  return (
    <div className={`absolute text-[10px] top-1 right-0 px-[7px] ${stausColor} text-white shadow-md p-1 rounded-l-lg`}>
      Auction {status}
    </div>
  );
}
