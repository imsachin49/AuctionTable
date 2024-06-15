import Image from "next/image";
import { GoShareAndroid } from "react-icons/go";
import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="rounded-sm shadow-md">
      <div className="relative w-[280px] h-[200px]">
        <Image
          src="/products/home1.jpg"
          alt="product"
          fill
          className="rounded-t-sm"
        />
        <div className="absolute bottom-0 flex w-full bg-[#1F2230] gap-1 p-2 py-1 items-center justify-center">
          <div className="flex text-white items-center justify-center p-1 px-3 flex-col rounded-md rounded-tr-[0] rounded-bl-[0] border border-[#929399]">
            <div className="font-normal">198</div>
            <div className="text-[8px]">Days</div>
          </div>
          <div className="flex text-white items-center justify-center p-1 px-3 flex-col rounded-md rounded-tr-[0] rounded-bl-[0] border border-[#929399]">
            <div className="font-normal">16</div>
            <div className="text-[8px]">Hours</div>
          </div>
          <div className="flex text-white items-center justify-center p-1 px-3 flex-col rounded-md rounded-tr-[0] rounded-bl-[0] border border-[#929399]">
            <div className="font-normal">50</div>
            <div className="text-[8px]">Minutes</div>
          </div>
          <div className="flex text-white items-center justify-center p-1 px-3 flex-col rounded-md rounded-tr-[0] rounded-bl-[0] border border-[#929399]">
            <div className="font-normal">02</div>
            <div className="text-[8px]">Seconds</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-sans gap-[5px] p-3 py-2">
        <div className="text-sm text-gray-950 font-semibold font-sans">
          Couple Wedding Ring
        </div>
        <div className="text-[10px] font-sans text-zinc-500 font-semibold rounded-md flex  gap-1">
          <div className="text-[12px] text-gray-700 font-normal font-sans">
            Current Bid:{" "}
            <span className="font-bold text-gray-600">235,90$</span>
          </div>
        </div>
        <div className="w-full flex font-sans text-sm font-medium mb-3 items-center justify-between mt-1">
          <Link
            href={`/items/${"123"}`}
            className="w-fit border flex items-center justify-center rounded-[4px] px-2 py-[5px] text-xs bg-[#32c36c] hover:bg-green-600 text-gray-100 capitalize font-semibold"
          >
            View Details
          </Link>
          <button className="mr-1 border border-gray-100 rounded-full p-1 bg-gray-100 hover:bg-gray-500 hover:text-white">
            <GoShareAndroid />
          </button>
        </div>
      </div>
    </div>
  );
}
