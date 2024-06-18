"use client"
import { useState } from "react";
import LongDescription from "./LongDescription";
import BiddingHistory from "./BiddingHistory";
import OtherAuction from "./OtherAuction";
import TabButton from "./TabButton";
import AuctionReview from "./AuctionReview";
import useSWR from "swr";
import { getTopXOngoingAuctions } from "@/services/productService";

export default function BiddingTab({ biddingHistory,product }: any) {
  const [tab, setTab] = useState<number>(1);
  const { data: otherauction } = useSWR("/api/player/top/ongoing?x=3",getTopXOngoingAuctions);

  return (
    <div className="sm:p-3 p-2">
      <div className="flex gap-1 sm:gap-5 flex-wrap items-center md:justify-start [&>*:nth-child(3)]:hidden [&>*:nth-child(3)]:sm:block">
        <TabButton tabId={1} activeTab={tab} setTab={setTab} text="Description" />
        <TabButton tabId={2} activeTab={tab} setTab={setTab} text="Auction History" />
        <TabButton tabId={3} activeTab={tab} setTab={setTab} text="Other Auctions" />
        <TabButton tabId={4} activeTab={tab} setTab={setTab} text="Reviews(0)" />
      </div>
      <div className="my-4 max-w-2xl px-1">
        {tab === 1 && <LongDescription product={product} />}
        {tab === 2 && <BiddingHistory biddingHistory={biddingHistory} />}
        {tab === 3 && <OtherAuction otherauction={otherauction} />}
        {tab === 4 && <AuctionReview/>}
      </div>
    </div>
  );
}