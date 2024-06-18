"use client";
import { useState, useRef, useEffect } from "react";
import { useSession,signOut } from "next-auth/react";
import { SlMenu } from "react-icons/sl";
import LoginButton from "./LoginModal";
import NavDrawer from "./NavDrawer";
import Logo from "./Logo";
import Link from "next/link";
import UserAccountNav from "./UserAccountNav";
import sidebarItems from "./data/sidebar-icons";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
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
        <div className="block sm:hidden">
          <button className="" type="button" onClick={toggleDrawer}>
            <SlMenu className="text-3xl text-[#a33434]" />
          </button>
          <div ref={drawerRef}>
            <NavDrawer
              isDrawerOpen={isDrawerOpen}
              toggleDrawer={toggleDrawer}
              signOut={signOut}
            />
          </div>
        </div>
        <div className="flex justify-end sm:justify-between w-full items-center">
          <div className="hidden sm:block">
            <Logo isShowFullLogo={true} />
          </div>
          <div className="sm:flex gap-8 hidden">
            {sidebarItems.slice(0, 3).map((item) => (
              <Link
                href={item.link}
                className={`flex items-center flex-col ${
                  pathname == item.link ? "text-green-400" : "text-gray-500"
                }`}
              >
                {item.icon && <item.icon className="text-md" />}
                <div
                  className={`text-[14px] font-semibold capitalize font-sans`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-5">
            {session?.user ? (
              <UserAccountNav
                email={session.user.email as string}
                name={session.user.name as string}
                imageUrl={session.user.image as string}
              />
            ) : (
              <LoginButton title="Login" variant="open" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
