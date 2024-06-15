"use client"
import { useState } from "react";
import LongDescription from "./LongDescription";
import BiddingHistory from "./BiddingHistory";
import OtherAuction from "./OtherAuction";
import TabButton from "./TabButton";
import AuctionReview from "./AuctionReview";

export default function BiddingTab({ biddingHistory }: any) {
  const [tab, setTab] = useState<number>(1);

  return (
    <div className="p-5">
      <div className="flex gap-5 flex-wrap items-center justify-center md:justify-start">
        <TabButton tabId={1} activeTab={tab} setTab={setTab} text="Description" />
        <TabButton tabId={2} activeTab={tab} setTab={setTab} text="Auction History" />
        <TabButton tabId={3} activeTab={tab} setTab={setTab} text="Other Auctions" />
        <TabButton tabId={4} activeTab={tab} setTab={setTab} text="Reviews(0)" />
      </div>
      <div className="my-4 max-w-2xl shadow-sm p-1 sm:p-6 py-2 border border-gray-100 rounded-lg">
        {tab === 1 && <LongDescription />}
        {tab === 2 && <BiddingHistory biddingHistory={biddingHistory} />}
        {tab === 3 && <OtherAuction />}
        {tab === 4 && <AuctionReview/>}
      </div>
    </div>
  );
}