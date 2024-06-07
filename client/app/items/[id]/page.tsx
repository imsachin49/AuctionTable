"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import BiddingDescription from "@/components/bid/BiddingDescription";
import BiddingProductImage from "@/components/bid/BiddingProductImage";
import BiddingTab from "@/components/bid/BiddingTab";
import PlaceBid from "@/components/bid/PlaceBid";
import { usePathname } from "next/navigation";
import useSWR from "swr";
import { fetchProduct } from "@/services/productService";
import { useState, useEffect } from "react";

export default function page() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const { data: productData, error } = useSWR(
    productId ? `/api/player/${productId}` : null,
    () => fetchProduct(productId)
  );
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = Date.now();
      const startTime = productData?.data?.startTime;
      const endTime = productData?.data?.endTime;
  
      if (now > endTime) {
        setTimeRemaining("Auction ended");
        return;
      }
  
      const diff = startTime - now;
  
      if (diff <= 0) {
        setTimeRemaining("Auction started");
        return;
      }
  
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(weeks / 4);
      const years = Math.floor(months / 12);
      const remainingHours = hours % 24;
      const remainingMinutes = minutes % 60;
      const remainingSeconds = seconds % 60;
  
      let timeString = '';
  
      if (years > 0) {
        timeString += `${years} year${years !== 1 ? 's' : ''}`;
      }
      if (months > 0) {
        timeString += ` ${months} month${months !== 1 ? 's' : ''}`;
      }
      if (weeks > 0) {
        timeString += ` ${weeks} week${weeks !== 1 ? 's' : ''}`;
      }
      if (days > 0) {
        timeString += ` ${days} day${days !== 1 ? 's' : ''}`;
      }
      if (remainingHours > 0) {
        timeString += ` ${remainingHours} hour${remainingHours !== 1 ? 's' : ''}`;
      }
      if (remainingMinutes > 0) {
        timeString += ` ${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`;
      }
      if (remainingSeconds > 0) {
        timeString += ` ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}`;
      }
  
      setTimeRemaining(`The auction will start in ${timeString}`);
    };
  
    calculateTimeRemaining();
    const timerId = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(timerId);
  }, [productData, productData?.data, productData?.data?.startTime, productData?.data?.endTime]);
  

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="w-full p-4 flex justify-center">
            <div className="w-full flex justify-center">
              <BiddingProductImage />
            </div>
            <div className="w-full">
              {/* @ts-ignore */}
              <BiddingDescription
                product={productData}
                timeRemaining={timeRemaining}
              />
              <PlaceBid product={productData} />
            </div>
          </div>
          {/* @ts-ignore */}
          <BiddingTab product={productData} />
        </div>
      </div>
    </>
  );
}
