import ProductCard from "../ProductCard";
import Link from "next/link";

export default function UpcomingAuctions() {
  return (
    <div className="flex items-center justify-center my-10 flex-col gap-2">
      <div className="w-full max-w-lg p-4">
        <h1 className="text-xl sm:text-2xl font-bold text-center py-2 text-blue-950">
          Up Comming Auction
        </h1>
        <p className="text-xs mb-2 text-center text-blue-950 font-sans">
          Explore on the world's best & largest Bidding marketplace with our
          beautiful Bidding products. We want to be a part of your smile,
          success and future growth.
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-wrap gap-2 max-w-4xl items-center justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Link href="/items">
      <button type="button" className="text-white bg-[#32c36c] hover:bg-[#55f093] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-5">
        View All
        <svg className="rtl:rotate-180 w-6 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
      </Link>
    </div>
  );
}
