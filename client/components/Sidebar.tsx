import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrMoney } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { LuHistory } from "react-icons/lu";
import { GrContact } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";

export default function Sidebar() {
  return (
    <div className="w-[200px] sticky top-20">
      <nav className="p-6 w-full flex flex-col overflow-auto">
        <ul className="space-y-1.5">
          <li className="flex items-center gap-2 borderborder-white cursor-pointer p-[3px] pl-3 py-2 rounded-md bg-gray-100 text-sm text-gray-950 border-gray-800">
            <GoHome />
            Home
          </li>
          <li className="flex items-center gap-2 borderborder-white cursor-pointer p-[3px] pl-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-800 hover:border-gray-800">
            <MdOutlineExplore />
            Explore
          </li>
          <li className="flex items-center gap-2 borderborder-white cursor-pointer p-[3px] pl-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-800 hover:border-gray-800">
            <IoIosHeartEmpty />
            Bids
          </li>
          <li className="flex items-center gap-2 borderborder-white cursor-pointer p-[3px] pl-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-800 hover:border-gray-800">
            <GrMoney />
            Sold List
          </li>
          <li className="flex items-center gap-2 borderborder-white cursor-pointer p-[3px] pl-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-800 hover:border-gray-800">
            <FaRegUser />
            Profile
          </li>
          <li className="flex items-center gap-2 borderborder-white cursor-pointer p-[3px] pl-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-800 hover:border-gray-800">
            <LuHistory />
            Bid History
          </li>
          <li className="flex items-center gap-2 borderborder-white cursor-pointer p-[3px] pl-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-800 hover:border-gray-800">
            <GrContact />
            Contact us
          </li>
          <li className="flex items-center gap-2 borderborder-white cursor-pointer p-[3px] pl-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-800 hover:border-gray-800">
            <CiSettings />
            Settings
          </li>
        </ul>
      </nav>
    </div>
  );
}