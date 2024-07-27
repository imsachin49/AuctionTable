import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrMoney } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { LuHistory } from "react-icons/lu";
import { GrContact } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";

const sidebarItems = [
  { name: "Home", icon: GoHome,link:"/" },
  { name: "Explore", icon: MdOutlineExplore,link:"/items" },
  { name: "Contact", icon: GrContact,link:"/touch" },
  { name: "Profile", icon: FaRegUser,link:"/profile" },
  // { name: "Bids", icon: IoIosHeartEmpty },
  // { name: "Sold List", icon: GrMoney },
  // { name: "Bid History", icon: LuHistory },
  // { name: "Settings", icon: CiSettings }
];

export default sidebarItems;