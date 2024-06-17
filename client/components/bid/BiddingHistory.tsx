import Image from "next/image";
import { formatTime } from "../../lib/time-format";

export default function BiddingHistory({
  biddingHistory,
}: {
  biddingHistory: {
    data: {
      bids: {
        _id: string;
        bidAmount: number;
        biddingTime: number;
        bidderId: {
          _id: string;
          username: string;
          avatar: string;
        };
      }[];
    };
  };
}) {
  
  if (biddingHistory?.data?.bids?.length === 0) {
    return (
      <div className="text-xs font-sans p-8 text-center">
        No Bidding History Yet!!
      </div>
    );
  }

  return (
    <div className="relative h-[216px] overflow-y-auto shadow-custom sm:rounded-lg history-scrollbar">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <tbody className="w-full">
          {biddingHistory?.data?.bids
            ?.sort((a, b) => b.biddingTime - a.biddingTime)
            .map((item, index) => (
              <tr
                key={index}
                className="flex w-full justify-between items-center border border-white border-b-gray-100"
              >
                <td
                  scope="row"
                  className="p-1 sm:p-2 font-medium text-gray-900 flex gap-1 sm:gap-4 items-center justify-center"
                >
                  <div>
                    <Image
                      src={item?.bidderId?.avatar || "/user-info.avif"}
                      height={30}
                      width={30}
                      alt={"noPicture"}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 font-semibold sm:font-bold text-xs sm:text-sm font-sans">
                      {item?.bidderId?.username || "No Name"}
                    </span>
                    <span className="text-xs text-gray-800">
                      {"$" + item?.bidAmount + ".00"}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs text-gray-800">
                  {formatTime(item?.biddingTime)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
