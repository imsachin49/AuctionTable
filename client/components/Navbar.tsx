"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import UserAccountNav from "./UserAccountNav";
import { SlMenu } from "react-icons/sl";
import LoginButton from "./LoginModal";
import NavDrawer from "./NavDrawer";

const Navbar = () => {
  const { data: session } = useSession();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="w-full p-3 border sticky top-0 bg-white z-40">
      <div className="flex justify-between px-1 items-center">
        <Link href={"/"} className="flex items-center gap-1">
          <img src={"/auction-logo.avif"} alt="logo" className="w-12 h-12" />
          <div className="flex items-center flex-col">
            <h1 className="text-xl font-bold text-[#a33434]">Auction Table</h1>
            <h6 className="text-xs text-[brown] font-semibold">
              {" "}
              Fulfill Your Desires!
            </h6>
          </div>
        </Link>
        <div className="hidden md:block">
          {session?.user ? (
            <UserAccountNav
              name={session?.user?.name ?? ""}
              email={session?.user?.email ?? ""}
              imageUrl={session?.user?.image ?? "/user-info.avif"}
            />
          ) : (
            <LoginButton title="Login" variant="open" />
          )}
        </div>

        <div className="block md:hidden">
          <button className="" type="button" onClick={toggleDrawer}>
            <SlMenu className="text-3xl text-[#a33434]" />
          </button>
          <NavDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
