"use client";
import ProductCard from "../ProductCard";
import Link from "next/link";
import useSWR from "swr";
import { getTopXOngoingAuctions } from "@/services/productService";
import { FaArrowRightLong } from "react-icons/fa6";
import { Exo_2 } from "next/font/google";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";
import ShowMoreSkeleton from "../skeletons/ShowMoreSkeleton";

const exo = Exo_2({ subsets: ["cyrillic"] });
export default function UpcomingAuctions() {
  const {
    data: products,
    error,
    isValidating,
  } = useSWR("/api/player/top/ongoing?x=3", getTopXOngoingAuctions);
  if (error) return <div>Failed to load</div>;

  return (
    <div className="flex items-center justify-center my-10 flex-col gap-2">
      <div className="w-full max-w-lg p-4">
        <h1 className="text-xl sm:text-2xl font-bold text-center py-2 text-blue-950">
          Up Comming Auction
        </h1>
        <p className="text-xs mb-2 text-center text-blue-950 ">
          Explore on the world's best & largest Bidding marketplace with our
          beautiful Bidding products. We want to be a part of your smile,
          success and future growth.
        </p>
      </div>
      <div className="w-full flex items-center justify-center px-3">
        <div className="gap-4 max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%]">
          {isValidating &&
            [1, 2, 3].map((i) => <ProductCardSkeleton key={i} />)}
          {!isValidating &&
            products?.data?.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </div>
      {isValidating ? (
        <ShowMoreSkeleton />
      ) : (
        <Link
          href="/items"
          className="w-full flex items-center justify-center my-8 text-gray-400 hover:text-gray-600"
        >
          <button
            className={`${exo.className} max-w-4xl text-xs w-[90%] border border-gray-400 hover:border-gray-600 rounded-md items-center text-center p-3 shadow-sm inline-flex justify-center`}
          >
            Show More
            <FaArrowRightLong className="ml-2" />
          </button>
        </Link>
      )}
    </div>
  );
}
