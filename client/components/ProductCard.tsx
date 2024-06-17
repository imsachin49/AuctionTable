import Image from "next/image";
import { GoShareAndroid } from "react-icons/go";
import Link from "next/link";
import TimeLeft from "./TimeLeft";

interface ProductProps {
  name: string;
  currentPrice: number;
  _id: string;
  pictures: string[];
  startTime: number;
}

export default function ProductCard({ product }: { product: ProductProps }) {
  return (
    <div className="rounded-md shadow-md">
      <div className="relative w-[280px] h-[200px]">
        <Image
          src={product.pictures[0] || "/products/home1.jpg"}
          alt="product"
          layout="fill"
          objectFit="cover"
          className="rounded-t-md"
        />
        <TimeLeft product={product} />
      </div>
      <div className="flex flex-col font-sans gap-[5px] p-3 py-2">
        <div className="text-sm text-gray-950 font-semibold">
          {product.name}
        </div>
        <div className="text-[10px] text-zinc-500 font-semibold rounded-md flex gap-1">
          <div className="text-[12px] text-gray-700 font-normal">
            Current Bid:{" "}
            <span className="font-bold text-gray-600 text-md">
              ${product.currentPrice}.00
            </span>
          </div>
        </div>
        <div className="w-full flex text-sm font-medium mb-3 items-center justify-between mt-1">
          <Link
            href={`/items/${product._id}`}
            className="w-fit border flex items-center justify-center rounded-[4px] px-2 py-[5px] text-xs bg-[#32c36c] hover:bg-green-600 text-gray-100 capitalize font-semibold"
          >
            View Details
          </Link>
          <button className="mr-1 border border-gray-100 rounded-full p-1 bg-gray-100 hover:bg-gray-500 hover:text-white">
            <GoShareAndroid />
          </button>
        </div>
      </div>
    </div>
  );
}
