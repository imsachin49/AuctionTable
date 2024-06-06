import React from "react";
import ItemCard from "../ItemCard";

export default function LiveAuctions() {
  return (
    <div className="w-full flex items-center justify-center my-8 flex-col">
      <div className="w-[80%] flex items-center justify-between">
        <div className="max-w-lg space-y-2">
            <h1 className=" text-3xl font-bold text-gray-800">Live Auction</h1>
            <p className="text-[12px] leading-4 pl-[3px] text-gray-600">
            Explore on the world's best & largest Bidding marketplace with our
            beautiful Bidding products. We want to be a part of your smile,
            success and future growth.
            </p>
        </div>
        <button className="px-8 py-2 rounded-full bg-[#f9395f] text-white text-sm font-bold font-sans">View All</button>
      </div>
    </div>
  );
}
