import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-14 pb-3 mt-[150px]">
      <div className="w-full px-5 mx-auto flex flex-col items-center">
        <div className="flex flex-col lg:flex-row gap-[50px] md:gap-[75px] lg:gap-[100px]">
          <div className="flex flex-col md:flex-row gap-[50px] md:gap-[75px] lg:gap-[100px] items-center">
            <div className="flex flex-col gap-3 items-center">
              <div className="flex items-center gap-1">
                <img src={"/auction1.png"} alt="logo" className="w-12 h-12" />
                <div className="flex flex-col items-center">
                  <h1 className="text-xl font-bold text-white">Auction Table</h1>
                  <h6 className="text-xs text-white font-semibold">Fulfill Your Desires!</h6>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-[15px] sm:gap-[25px] md:gap-[40px] lg:gap-[80px] items-center md:items-start">
              <div className="flex flex-col gap-2 items-center md:items-start">
                <div className="text-sm font-bold">Navigation</div>
                <div className="text-xs text-gray-300 hover:text-[#32c36c] font-semibold cursor-pointer">All Product</div>
                <div className="text-xs text-gray-300 hover:text-[#32c36c] font-semibold cursor-pointer">How it Works</div>
                <div className="text-xs text-gray-300 hover:text-[#32c36c] font-semibold cursor-pointer">My Account</div>
                <div className="text-xs text-gray-300 hover:text-[#32c36c] font-semibold cursor-pointer">About Company</div>
                <div className="text-xs text-gray-300 hover:text-[#32c36c] font-semibold cursor-pointer">Our News Feed</div>
              </div>
              <div className="flex flex-col gap-2 items-center md:items-start">
                <div className="text-sm font-bold">Help & FAQs</div>
                <div className="text-xs text-gray-300 hover:text-[#32c36c] font-semibold cursor-pointer">Help Center</div>
                <div className="text-xs text-gray-300 hover:text-[#32c36c] font-semibold cursor-pointer">Customer FAQs</div>
                <div className="text-xs text-gray-300 hover:text-[#32c36c] font-semibold cursor-pointer">Terms and Conditions</div>
                <div className="text-xs text-gray-300 hover:text-[#32c36c] font-semibold cursor-pointer">Security Information</div>
                <div className="text-xs text-gray-300 hover:text-[#32c36c] font-semibold cursor-pointer">Merchant Add Policy</div>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center md:items-start">
              <div className="text-sm font-bold">Latest Feed</div>
              <div className="max-w-[240px] flex gap-3">
                <div className="relative h-12 w-20 rounded-md">
                  <Image
                    src="/products/apparel1.jpg"
                    alt="logo"
                    fill
                    className="rounded-sm h-12 w-20"
                  />
                </div>
                <div className="flex flex-col justify-between py-[2px]">
                  <div className="text-xs text-gray-300">January 31,2022</div>
                  <div className="text-xs text-gray-300 leading-3 hover:text-[#32c36c] font-semibold cursor-pointer">
                    Grant Distributions Continue to Increase.
                  </div>
                </div>
              </div>

              <div className="max-w-[240px] flex gap-3">
                <div className="relative h-12 w-20 rounded-md">
                  <Image
                    src="/products/apparel2.jpg"
                    alt="logo"
                    fill
                    className="rounded-sm h-12 w-20"
                  />
                </div>
                <div className="flex flex-col justify-between py-[2px]">
                  <div className="text-xs text-gray-300">January 31,2022</div>
                  <div className="text-xs text-gray-300 leading-3 hover:text-[#32c36c] font-semibold cursor-pointer">
                    Grant Distributions Continue to Increase.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        <div className="text-[12px] text-white/[0.5] hover:text-[#32c36c] cursor-pointer text-center md:text-left">
          © 2023 Company, Inc. All Rights Reserved
        </div>

        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-white/[0.5] hover:text-[#32c36c] cursor-pointer">Guides</div>
          <div className="text-[12px] text-white/[0.5] hover:text-[#32c36c] cursor-pointer">Terms of Sale</div>
          <div className="text-[12px] text-white/[0.5] hover:text-[#32c36c] cursor-pointer">Terms of Use</div>
          <div className="text-[12px] text-white/[0.5] hover:text-[#32c36c] cursor-pointer">Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
}
