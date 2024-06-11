"use client";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import LoginButton from "./LoginModal";
import { useSession, signIn, signOut } from "next-auth/react";
import UserAccountNav from "./UserAccountNav";
import { Button } from "./ui/Button";
import { LuLogIn } from "react-icons/lu";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname=usePathname();
  console.log("pathname",pathname);

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
        {pathname !== "/" && pathname !== "/login" && (
          <div className="flex items-center justify-center w-[600px]">
            <input
              type="text"
              placeholder="Search for a product"
              className="border p-2 rounded-md rounded-r-none text-sm w-full outline outline-transparent placeholder:text-sm placeholder:text-gray-600"
            />
            <button className="border p-[7px] bg-[#a33434] rounded-r-md">
              <IoSearch className="text-2xl text-white" />
            </button>
          </div>
        )}
        <>
          {session?.user ? (
            <UserAccountNav
              name={session.user.name ?? ""}
              email={session.user.email ?? ""}
              imageUrl={session.user.image ?? "/user-info.avif"}
            />
          ) : (
            // <LoginButton />
            <Button
              variant={"open"}
              type="button"
              className="px-4 py-1 flex items-center font-semibold gap-2"
              onClick={handleLoginClick}
            >
              <LuLogIn size={15} />
              <span>Login</span>
            </Button>
          )}
        </>
      </div>
    </div>
  );
};

export default Navbar;
