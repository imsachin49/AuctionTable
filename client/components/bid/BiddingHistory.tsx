import { biddingHistory } from "../data/bidd";
import Image from "next/image";

export default function BiddingHistory() {
  if (biddingHistory.length === 0) {
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
          {biddingHistory.map((item, index) => (
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
                    src="/user-info.avif"
                    height={30}
                    width={30}
                    alt={"noImg"}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-600 font-bold text-sm font-sans">
                    {item.username}
                  </span>
                  <span className="text-xs text-gray-800">
                    {item.amount} ETH
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-xs text-gray-800">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}