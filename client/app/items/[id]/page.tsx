"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import BiddingDescription from "@/components/bid/BiddingDescription";
import BiddingTab from "@/components/bid/BiddingTab";
import PlaceBid from "@/components/bid/PlaceBid";
import { usePathname, useRouter } from "next/navigation";
import useSWR from "swr";
import { fetchProduct, fetchBiddingHistory } from "@/services/productService";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import ProductImages from "@/components/bid/ProductImages";

export default function Page() {
  const [timeRemaining, setTimeRemaining] = useState("");

  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const router = useRouter();
  const { data: productData, error } = useSWR(
    productId ? `/api/player/${productId}` : null,
    () => fetchProduct(productId),
    {
      refreshInterval: 60000, // Refresh every minute
    }
  );

  if (productData?.statusCode === 404) {
    router.push("/404");
  }

  const {
    data: biddingHistory,
    error: biddingHistoryError,
    mutate: mutateBids,
  } = useSWR(productId ? `/api/player/${productId}/bids` : null, () =>
    fetchBiddingHistory(productId)
  );

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

        let endTimeString = "";

        if (endYears > 0) {
          endTimeString += `${endYears} year${endYears !== 1 ? "s" : ""}`;
        }
        if (endMonths > 0) {
          endTimeString += ` ${endMonths} month${endMonths !== 1 ? "s" : ""}`;
        }
        if (endWeeks > 0) {
          endTimeString += ` ${endWeeks} week${endWeeks !== 1 ? "s" : ""}`;
        }
        if (endDays > 0) {
          endTimeString += ` ${endDays} day${endDays !== 1 ? "s" : ""}`;
        }
        if (remainingEndHours > 0) {
          endTimeString += ` ${remainingEndHours} hour${
            remainingEndHours !== 1 ? "s" : ""
          }`;
        }
        if (remainingEndMinutes > 0) {
          endTimeString += ` ${remainingEndMinutes} minute${
            remainingEndMinutes !== 1 ? "s" : ""
          }`;
        }
        if (remainingEndSeconds > 0) {
          endTimeString += ` ${remainingEndSeconds} second${
            remainingEndSeconds !== 1 ? "s" : ""
          }`;
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

      let timeString = "";

      if (years > 0) {
        timeString += `${years} year${years !== 1 ? "s" : ""}`;
      }
      if (months > 0) {
        timeString += ` ${months} month${months !== 1 ? "s" : ""}`;
      }
      if (weeks > 0) {
        timeString += ` ${weeks} week${weeks !== 1 ? "s" : ""}`;
      }
      if (days > 0) {
        timeString += ` ${days} day${days !== 1 ? "s" : ""}`;
      }
      if (remainingHours > 0) {
        timeString += ` ${remainingHours} hour${
          remainingHours !== 1 ? "s" : ""
        }`;
      }
      if (remainingMinutes > 0) {
        timeString += ` ${remainingMinutes} minute${
          remainingMinutes !== 1 ? "s" : ""
        }`;
      }
      if (remainingSeconds > 0) {
        timeString += ` ${remainingSeconds} second${
          remainingSeconds !== 1 ? "s" : ""
        }`;
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
      <div className="flex items-center justify-center">
        <div className="flex flex-col mx-1 md:mx-4 gap-1 items-center md:items-start justify-start sm:justify-start w-full lg:max-w-[80%]">
          <div className="flex h-full px-1 lg:px-3 items-center flex-col md:flex-row mb-5 py-2 w-full gap-2">
            <div className="flex flex-col w-full h-full items-center justify-center max-w-[600px]">
              <ProductImages pictures={productData?.data?.pictures} />
            </div>
            <div className="flex flex-col gap-2 w-full h-full max-w-[610px]">
              <div className="w-full">
                <BiddingDescription
                  product={productData}
                  timeRemaining={timeRemaining}
                />
              </div>
              <div className="">
                <PlaceBid product={productData} mutate={mutateBids} />
              </div>
            </div>
          </div>

          <div className="w-full max-w-[610px]">
            <BiddingTab biddingHistory={biddingHistory} product={productData} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
