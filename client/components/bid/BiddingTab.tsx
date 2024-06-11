"use client";
import { useState } from "react";
import LongDescription from "./LongDescription";
import BiddingHistory from "./BiddingHistory";
import OtherAuction from "./OtherAuction";

export default function BiddingTab({biddingHistory}) {
  const [tab, setTab] = useState<Number>(1);

  return (
    <div className="max-w-xl my-8 ml-12">
      <div className="flex gap-5">
        <button
          className={`px-5 text-center cursor-pointer text-xs font-semibold shadow-md border border-t-gray-100 py-3 rounded-md ${
            tab == 1 ? "bg-[#32c36c] text-white shadow-none" : ""
          }`}
          onClick={() => setTab(1)}
        >
          Description
        </button>
        <button
          className={`px-5 text-center cursor-pointer text-xs font-semibold shadow-md border border-t-gray-100 py-3 rounded-md ${
            tab == 2 ? "bg-[#32c36c] text-white shadow-none" : ""
          }`}
          onClick={() => setTab(2)}
        >
          Bidding History
        </button>
        <button
          className={`px-5 text-center cursor-pointer text-xs font-semibold shadow-md border border-t-gray-100 py-3 rounded-md ${
            tab == 3 ? "bg-[#32c36c] text-white shadow-none" : ""
          }`}
          onClick={() => setTab(3)}
        >
          Other Auction
        </button>
      </div>
      <div className="my-5">
        {tab == 1 ? (
          <LongDescription />
        ) : tab == 2 ? (
          <BiddingHistory biddingHistory={biddingHistory} />
        ) : (
          <OtherAuction />
        )}
      </div>
    </div>
  );
}
