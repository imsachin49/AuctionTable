import Image from "next/image";

export default function Process() {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-2 mt-8">
        <p className="text-sm font-bold text-orange-500">Start now</p>
        <p className="text-2xl font-bold text-gray-800">How it Works</p>
      </div>
      <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse justify-center h-[300px]">
        <li className="flex relative items-center text-gray-500 space-x-2.5 rtl:space-x-reverse">
          <span className="">
            <div className="flex items-center gap-2 py-2 text-orange-500">
              <span className="flex items-center justify-center w-6 h-6 border border-orange-500 rounded-full shrink-0">
                {1}
              </span>
              <h3 className="font-medium leading-tight text-md text-orange-500">
                Search & Browse
              </h3>
            </div>
            <p className="text-sm max-w-[300px] text-gray-500">
              Explore a vast collection of unique items. Search by category,
              keyword, or filter by specific criteria to find the perfect
              treasure.
            </p>
          </span>
          <Image
            src="/uo-down.png"
            alt="no"
            width={120}
            height={100}
            className="absolute -right-4 -top-5 -rotate-[20deg]"
          />
        </li>
        <li className="flex relative items-center text-orange-500 space-x-2.5 rtl:space-x-reverse">
          <span className="">
            <div className="flex items-center gap-2 py-2 text-orange-500">
              <span className="flex items-center justify-center w-6 h-6 border border-orange-500 rounded-full shrink-0">
                {2}
              </span>
              <h3 className="font-medium leading-tight text-md">
                Place Your Bids
              </h3>
            </div>
            <p className="text-sm max-w-[300px] text-gray-500">
              Get in on the action! Place bids on items that catch your eye and
              strategically outmaneuver other competitors to win the auction
            </p>
          </span>
          <Image
            src="/down-up.png"
            alt="no"
            width={120}
            height={100}
            className="absolute top-20 -right-8 rotate-[6deg]"
          />
        </li>
        <li className="flex relative items-center text-orange-500 space-x-2.5 rtl:space-x-reverse">
          <span className="">
            <div className="flex items-center gap-2 py-2 text-orange-500">
              <span className="flex items-center justify-center w-6 h-6 border border-orange-500 rounded-full shrink-0">
                {3}
              </span>
              <h3 className="font-medium leading-tight text-md">
                Win & Secure
              </h3>
            </div>
            <p className="text-sm max-w-[300px] text-gray-500">
              Congratulations! You've secured the winning bid. Finalize the
              transaction and get ready to receive your coveted item
            </p>
          </span>
        </li>
      </ol>
    </>
  );
}