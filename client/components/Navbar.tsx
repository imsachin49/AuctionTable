"use client";
import { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { SlMenu } from "react-icons/sl";
import LoginButton from "./LoginModal";
import NavDrawer from "./NavDrawer";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const { data: session } = useSession();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen]);

  return (
    <div className="w-full p-3 border sticky top-0 bg-white z-40">
      <div className="flex justify-between px-1 items-center">
        <div className="block md:hidden">
          <button className="" type="button" onClick={toggleDrawer}>
            <SlMenu className="text-3xl text-[#a33434]" />
          </button>
          <div ref={drawerRef}>
            <NavDrawer
              isDrawerOpen={isDrawerOpen}
              toggleDrawer={toggleDrawer}
            />
          </div>
        </div>
        <div className="hidden md:block">
          <Logo isShowFullLogo={true} />
        </div>
        <div className="block">
          {session?.user ? (
            <Button
              variant="hot"
              type="button"
              className="px-4 py-1 flex items-center font-semibold gap-2"
              onClick={() => signOut()}
            >
              <LuLogOut size={20} className="font-bold" />
              <span>Logout</span>
            </Button>
          ) : (
            <LoginButton title="Login" variant="open" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
