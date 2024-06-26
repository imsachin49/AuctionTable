import React from "react";
import UserBids from "./UserBids";

export default function NewUserBids({userBids,isLoading}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex items-center gap-2">
        <div className="text-xs text-gray-500 font-medium w-[30px] sm:w-[50px] p-[1px] bg-indigo-600 rounded-full"></div>
        <span className="text-sm sm:text-lg font-semibold">Sachin's Recent Bids</span>
      </div>
      <UserBids userBids={userBids} />
    </div>
  );
}
