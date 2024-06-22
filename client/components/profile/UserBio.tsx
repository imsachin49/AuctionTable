"use client";
import Image from "next/image";
import { Edit2Icon } from "lucide-react";
import { CiChat1 } from "react-icons/ci";
import { useSession } from "next-auth/react";

export default function UserBio() {
  const { data: session } = useSession();
  
  return (
    <div className="w-full p-0 sm:p-5 mb-4">
      <div className="flex gap-4 sm:gap-8 items-center w-full">
        <Image
          src={session?.user?.image ? session?.user?.image : "/user-info.avif"}
          height={120}
          width={120}
          alt="User Info"
          className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] rounded-full"
        />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row gap-1 items-start sm:items-center">
            <h1 className="text-2xl font-extrabold capitalize">
              {session?.user?.name || "No Name"}
            </h1>
          </div>
          <div className="text-xs sm:text-sm text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, alias?
          </div>
          <div className="flex items-center justify-between max-w-[280px] my-1">
            <span className="text-gray-800 text-xs sm:text-md">
              <strong className="text-black">0</strong> Sold
            </span>
            <span className="text-gray-800 text-xs sm:text-md">
              <strong className="text-black">00</strong> Bids
            </span>
            <span className="text-gray-800 text-xs sm:text-md">
              <strong className="text-black">0</strong> Owned
            </span>
          </div>
          {/* <div className="flex gap-4">
            <button className="p-[6px] px-[10px] rounded-md border border-gray-400 gap-1 flex items-center text-gray-800 text-sm">
              <Edit2Icon size={8} className="text-black" />
              <span className="text-xs">Edit</span>
            </button>
            <button className="p-[8px] px-[10px] rounded-md border border-gray-400 gap-1 flex items-center text-gray-800 text-sm">
              <CiChat1 size={10} className="text-black" />
              <span className="text-xs">Message</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
