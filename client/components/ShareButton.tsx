import { RWebShare } from "react-web-share";
import { GoShareAndroid } from "react-icons/go";
import toast, { Toaster } from "react-hot-toast";

export default function ShareButton({ product }: { product: any }) {
  const shareUrl = `https://auctiontable.vercel.app/items/${product._id}`;

  return (
    <RWebShare
      data={{ text: "AuctionTable", url: shareUrl, title: `${product?.name}` }}
      onClick={() => console.log("shared successfully!")}
    >
      <span className="mr-1 border border-gray-100 rounded-full p-1 bg-gray-100 hover:bg-gray-500 hover:text-white">
        <GoShareAndroid />
      </span>
    </RWebShare>
  );
}