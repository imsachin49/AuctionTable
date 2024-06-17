import Image from "next/image";
import Link from "next/link";

export default function Logo({isShowFullLogo}: {isShowFullLogo: boolean}) {
  return (
    <Link href={"/"} className="flex items-center gap-1">
      <Image height={60} width={60} src={"/auction1.png"} alt="logo" />
      <div className={`flex items-center flex-col ${!isShowFullLogo ? "hidden md:flex" : ""}`}>
        <h1 className="text-md md:text-xl font-bold text-[#a33434]">Auction Table</h1>
        <h6 className="text-xs text-[brown] font-semibold"> Fulfill Your Desires!</h6>
      </div>
    </Link>
  );
}