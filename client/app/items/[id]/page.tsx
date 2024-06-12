"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import BiddingDescription from "@/components/bid/BiddingDescription";
import BiddingProductImage from "@/components/bid/BiddingProductImage";
import BiddingTab from "@/components/bid/BiddingTab";
import PlaceBid from "@/components/bid/PlaceBid";
import { usePathname } from "next/navigation";
import useSWR from "swr";
import { fetchProduct,fetchBiddingHistory } from "@/services/productService";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function page() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const { data: productData, error } = useSWR(productId ? `/api/player/${productId}` : null,() => fetchProduct(productId));
  const { data: biddingHistory, error: biddingHistoryError } = useSWR(productId ? `/api/player/${productId}/bids` : null,() => fetchBiddingHistory(productId));
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = Date.now();
      const startTime = new Date(productData?.data?.startTime).getTime();
      const endTime = new Date(productData?.data?.endTime).getTime();

      if (now > endTime) {
        setTimeRemaining("Auction ended");
        return;
      }

      const diff = startTime - now;

      if (diff <= 0) {
        const endDiff = endTime - now;
        const endSeconds = Math.floor(endDiff / 1000);
        const endMinutes = Math.floor(endSeconds / 60);
        const endHours = Math.floor(endMinutes / 60);
        const endDays = Math.floor(endHours / 24);
        const endWeeks = Math.floor(endDays / 7);
        const endMonths = Math.floor(endWeeks / 4);
        const endYears = Math.floor(endMonths / 12);
        const remainingEndHours = endHours % 24;
        const remainingEndMinutes = endMinutes % 60;
        const remainingEndSeconds = endSeconds % 60;

        let endTimeString = '';

        if (endYears > 0) {
          endTimeString += `${endYears} year${endYears !== 1 ? 's' : ''}`;
        }
        if (endMonths > 0) {
          endTimeString += ` ${endMonths} month${endMonths !== 1 ? 's' : ''}`;
        }
        if (endWeeks > 0) {
          endTimeString += ` ${endWeeks} week${endWeeks !== 1 ? 's' : ''}`;
        }
        if (endDays > 0) {
          endTimeString += ` ${endDays} day${endDays !== 1 ? 's' : ''}`;
        }
        if (remainingEndHours > 0) {
          endTimeString += ` ${remainingEndHours} hour${remainingEndHours !== 1 ? 's' : ''}`;
        }
        if (remainingEndMinutes > 0) {
          endTimeString += ` ${remainingEndMinutes} minute${remainingEndMinutes !== 1 ? 's' : ''}`;
        }
        if (remainingEndSeconds > 0) {
          endTimeString += ` ${remainingEndSeconds} second${remainingEndSeconds !== 1 ? 's' : ''}`;
        }

        setTimeRemaining(`Auction ends in ${endTimeString}`);
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
  }, [productData]);

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
              <BiddingProductImage product={productData} />
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
          <BiddingTab product={productData} biddingHistory={biddingHistory} />
        </div>
      </div>
      <Footer />
    </>
  );
}
