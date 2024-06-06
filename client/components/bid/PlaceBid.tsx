import { FiPlus, FiMinus } from "react-icons/fi";
import Link from "next/link";

export default function PlaceBid() {
  return (
    <div className="border border-gray-100 p-4 max-w-md rounded-md shadow-md">
      <div className="font-bold text-sm pb-[2px] text-gray-950">Bid Now</div>
      <div className="text-xs text-gray-500 font-medium pb-2">
        Bid Amount : Minimum Bid &nbsp;(+$20.00)
      </div>
      <div className="relative space-x-1 mt-[3px] mb-4">
        <div className="text-xs text-gray-500 font-medium w-[40px] bg-[#32c36c] p-[1px] absolute -top-2 rounded-full"></div>
        <div className="text-xs text-gray-500 font-medium w-[5px] bg-[#32c36c] p-[1px] absolute -top-2 left-10 rounded-full"></div>
      </div>
      <div className="flex gap-2">
        <form className="flex border items-center w-fit">
          <button type="button" className="p-3 py-2">
            <FiMinus className="w-3 h-4 text-gray-90" />
          </button>
          <input
            type="text"
            className="text-center text-gray-700 outline-none border-none text-xs font-sans mx-2"
            value={"$90.184,00"}
          />
          <button type="button" className="p-3 py-2">
            <FiPlus className="w-3 h-4 text-gray-900" />
          </button>
        </form>
        <Link
          href="/items/12345"
          className="border flex items-center justify-center w-full rounded-[4px] px-3 py-1 text-xs bg-[#32c36c] hover:bg-green-600 text-gray-100 capitalize font-semibold"
        >
          Place a bid
        </Link>
      </div>
    </div>
  );
}
