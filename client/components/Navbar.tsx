"use client";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import UserAccountNav from "./UserAccountNav";
import { Button } from "./ui/button";
import { LuLogIn } from "react-icons/lu";
import SearchPlayer from "./SearchPlayer";
import LoginButton from "./LoginModal";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const handleLoginClick = () => {
    router.push(`/login?callbackUrl=${pathname}`);
  };

  return (
    <div className="w-full p-3 border sticky top-0 bg-white z-40">
      <div className="flex justify-between px-1">
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
        {pathname === "/items" && <SearchPlayer />}
        <>
          {session?.user ? (
            <UserAccountNav
              name={session.user.name ?? ""}
              email={session.user.email ?? ""}
              imageUrl={session.user.image ?? "/user-info.avif"}
            />
          ) : (
            <LoginButton title="Login" variant="open" />
          )}
        </>
      </div>
    </div>
  );
};

export default Navbar;
