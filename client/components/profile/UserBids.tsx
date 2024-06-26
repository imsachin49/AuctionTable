"use client";
import UserBidsSkeleton from "../skeletons/UserBidSkeleton";
import UserBidCard from "./UserBidCard";
import useSWR from "swr";

export default function UserBids() {
  return <UserBidsSkeleton />;

  return (
    <div className="w-full h-full">
      <div className="flow-root">
        <ul className="max-h-[290px] overflow-auto space-y-2 mx-1 px-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <UserBidCard key={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
