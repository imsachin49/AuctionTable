import React from "react";

interface ProductProps {
  data: {
    name: string;
    description: string;
    startPrice: number;
  };
  timeRemaining: string;
  product?: {
    data: {
      name: string;
      description: string;
      startPrice: number;
    };
  };
}

export default function BiddingDescription({product,timeRemaining}: ProductProps) {
  return (
    <div className="w-full flex p-1 pl-0 mb-5 rounded-lg max-w-md flex-col gap-2">
      <span className="font-bold text-lg leading-6 capitalize">{product?.data?.name} auction 132</span>
      <div className="flex border relative items-center bg-white shadow-sm rounded-md border-gray-200 gap-2">
        <div className="w-[4px] h-[40px] bg-[#32c36c]"></div>
        <div className="p-1 text-sm text-gray-600 pl-1">{timeRemaining}</div>
      </div>
    </div>
  );
}