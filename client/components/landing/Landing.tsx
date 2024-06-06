import Link from "next/link"

export default function Landing() {
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="flex items-center justify-center h-[460px] flex-col">
        <h1 className="text-6xl text-center text-gray-800 dark:text-white">
          Unlock the <span className="text-rose-500 font-extrabold">Thrill</span> of the Auction
        </h1>
        <p className="font-extrabold text-5xl py-1">
          Find Your Perfect Deal
        </p>
        <p className="text-center m-4 mt-6 text-xl">
          Experience the excitement of auctions. Bid on incredible items or sell
          your own for the best price.
        </p>
        <div className="flex gap-4 mt-2">
          <Link href="/items" className="border px-6 py-3 rounded-md bg-gray-900 text-gray-100">
            Start Bidding
          </Link>
          <Link href="/sell" className="border px-6 py-3 rounded-md border-rose-400">
            Sell Your Items
          </Link>
        </div>
      </div>
    </div>
  )
}