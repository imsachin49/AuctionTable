import Image from "next/image";
import { formatDate } from "@/lib/time-format";

export default function UserBidCard({item}:{item: any}) {
  return (
    <li className="py-3 px-2 rounded-md border border-gray-200">
        <div className="flex items-center">
        <div className="flex-shrink-0">
            <Image height={50} width={50} className="w-10 h-10 rounded-full" src={`${item?.player?.pictures[0]} || /user-info.avif`} alt="Neil image"/>
        </div>
        <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium truncate text-gray-800">{item?.player?.name}</p>
            <p className="text-xs truncate text-gray-500">{formatDate(item?.bid?.biddingTime)}</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-800">${item?.bid?.bidAmount}</div>
        </div>
    </li>
  )
}