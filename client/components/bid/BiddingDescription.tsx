import React from "react";

interface ProductProps {
  product:{
    data: {
      name: string;
    }
  };
  timeRemaining: string;
}

export default function BiddingDescription({product,timeRemaining}: ProductProps) {
  return (
    <div className="w-full flex rounded-lg flex-col gap-2 shadow-md border border-gray-100 p-2 py-3 sm:p-4">
      <span className="font-bold text-lg leading-6 capitalize">{product?.data?.name} auction</span>
      <div className="flex border relative items-center bg-white shadow-sm rounded-md border-gray-200 gap-2">
        <div className="w-[4px] h-[45px] bg-indigo-600"></div>
        <div className="p-1 text-sm text-gray-600">{timeRemaining}</div>
      </div>
    </div>
  );
}