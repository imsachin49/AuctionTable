"use client";
import { useState, useEffect } from "react";

interface ProductProps {
  startTime: number;
  endTime: number;
}

export default function AuctionStatus({ product }: { product: ProductProps }) {
  const [status, setStatus] = useState("Upcoming");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const startDistance = product?.startTime - now;
      const endDistance = product?.endTime - now;

      if (endDistance < 0) {
        setStatus("Ended");
      } else if (startDistance > 0) {
        setStatus("Upcoming");
      } else {
        setStatus("Started");
      }
    };

    const interval = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Run once immediately to avoid delay
    return () => clearInterval(interval);
  }, [product.startTime, product.endTime]);

  return (
    <div className="absolute text-[10px] top-2 left-0 px-[7px] bg-[#32c36c] text-white shadow-md p-1 rounded-r-lg">
      Auction {status}
    </div>
  );
}
