"use client";
import UserBidsSkeleton from "../skeletons/UserBidSkeleton";
import UserBidCard from "./UserBidCard";
import useSWR from "swr";

export default function UserBids({ userBids, isLoading }) {
  if (isLoading) return <UserBidsSkeleton />;

  return (
    <div className="w-full h-full">
      <div className="flow-root">
        <ul className="max-h-[290px] overflow-auto space-y-2 mx-1 px-1">
          {userBids.map((item) => (
            <UserBidCard key={item} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
