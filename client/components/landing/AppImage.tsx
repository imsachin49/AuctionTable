import Image from "next/image";

export default function AppImage() {
  return (
    <div className="p-5 flex justify-between mt-20 mb-2">
      <div className="flex ml-8">
        <img
          src="/auctionss.gif"
          alt="app-image"
          className="h-[350px] -rotate-3 rounded-xl"
        />
      </div>
      <div className="flex flex-col max-w-lg border border-gray-50 shadow-sm flex-1 p-5 h-fit mr-5 rounded-lg">
        <button className="text-center uppercase border p-2 rounded-full px-4 w-fit m-1">
          GLOBAL AUCTION HUB
        </button>
        <div className="p-3 space-y-2">
          <h1 className="text-4xl font-bold">Bid and Win</h1>
          <h1 className="text-4xl font-bold">on AuctionTable</h1>
        </div>
        <span className="p-3 space-y-2 text-md">
          Explore the world of online auctions with AuctionTable, your gateway
          to global bidding opportunities. With a diverse selection of items and
          advanced bidding features, AuctionTable offers a seamless and secure
          platform for users worldwide to discover, bid, and win unique
          products. Join our community and experience the excitement of the
          auction world today!
        </span>
      </div>
    </div>
  );
}
