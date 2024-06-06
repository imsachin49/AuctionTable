"use client"
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { usePathname } from 'next/navigation'
import UploadButton from "./LoginModal";

const Navbar = () => {
  const isLoggedIn=false;
  const pathname = usePathname()
  
  return (
    <div className="w-full p-3 border sticky top-0 bg-white z-40">
      <div className="flex justify-between px-1">
        <Link href={'/'} className="flex items-center gap-1">
          <img src={"/auction-logo.avif"} alt="logo" className="w-12 h-12" />
          <div className="flex items-center flex-col">
            <h1 className="text-xl font-bold text-[#a33434]">Auction Table</h1>
            <h6 className="text-xs text-[brown] font-semibold">
              {" "}
              Fulfill Your Desires!
            </h6>
          </div>
        </Link>
        {pathname!=='/' && <div className="flex items-center justify-center w-[600px]">
          <input
            type="text"
            placeholder="Search for a product"
            className="border p-2 rounded-md rounded-r-none text-sm w-full outline outline-transparent placeholder:text-sm placeholder:text-gray-600"
          />
          <button className="border p-[7px] bg-[#a33434] rounded-r-md">
            <IoSearch className="text-2xl text-white" />
          </button>
        </div>}
        <>{isLoggedIn ?
          <div className="flex items-center justify-center">
            <img
              src={"/user-info.avif"}
              alt="logo"
              className="w-12 h-12 rounded-full shadow-lg border cursor-pointer"
            />
          </div> 
          :
            <UploadButton />
        }
        </>
      </div>
    </div>
  );
};

export default Navbar;
