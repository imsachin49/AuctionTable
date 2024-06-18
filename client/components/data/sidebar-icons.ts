import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrMoney } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { LuHistory } from "react-icons/lu";
import { GrContact } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";

const sidebarItems = [
  { name: "Home", icon: GoHome },
  { name: "Explore", icon: MdOutlineExplore },
  { name: "Bids", icon: IoIosHeartEmpty },
  { name: "Profile", icon: FaRegUser },
  { name: "Contact us", icon: GrContact },
  // { name: "Sold List", icon: GrMoney },
  // { name: "Bid History", icon: LuHistory },
  // { name: "Settings", icon: CiSettings }
];

export default sidebarItems;