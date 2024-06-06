import Image from "next/image";
import Link from "next/link";
import { GoShareAndroid } from "react-icons/go";

export default function ItemCard() {
  return (
    <div className="border border-gray-200 w-[295px] rounded-md max-w-md">
      <div className="relative">
        <img
          src={"/Iphone.png"}
          alt="noImg"
          className="h-[200px] w-[295px] rounded-sm"
        />
        <div className="absolute bottom-[12px] flex w-full items-center justify-center">
          <span className="bg-white p-1 shadow-sm rounded-2xl w-1/2 font-gray-950 font-bold font-sans text-zinc-700">
            00H : 00M : 00S
          </span>
        </div>
      </div>

      <div className="p-2 space-y-[5px] relative w-fill">
        <p className="text-sm font-sans font-bold text-gray-700 flex p-1 pb-0 text-start px-2 cursor-pointer">
          IPhone 11 Pro Max All Variants Available For Sale
        </p>
        <div className="p-2 flex items-center justify-between py-1">          
          <p className="text-xs text-zinc-500 mr-3 font-sans font-medium">
            Biding Price : <span className="font-bold text-gray-800">$75.99</span>
          </p>
        </div>
      </div>

      <div className="w-full flex px-3 font-sans text-sm font-medium mb-3 items-center justify-between">
        <Link href="/items/12345" className="w-fit border text-center rounded-[4px] px-3 py-1 text-xs bg-[#32c36c] hover:bg-green-600 text-gray-100 capitalize font-semibold">
          Place a bid
        </Link>
        <button className="mr-1 border border-gray-100 rounded-full p-1 bg-gray-100 hover:bg-gray-500 hover:text-white">
          <GoShareAndroid />
        </button>
      </div>
    </div>
  );
}
