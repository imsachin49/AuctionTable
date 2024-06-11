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

  if (!biddingHistory) {
    return (
      <div className="flex items-center justify-center h-[230px]">
        <p className="text-sm text-gray-500">No Bidding History</p>
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
                className="flex w-full justify-between items-center border border-white border-b-gray-200"
              >
                <td
                  scope="row"
                  className="p-2 font-medium text-gray-900 flex gap-4 items-center justify-center"
                >
                  <div>
                    <Image
                      src={item?.bidderId?.avatar || "/user-info.avif"}
                      height={30}
                      width={30}
                      alt={"noImg"}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 font-bold text-sm font-sans">
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
