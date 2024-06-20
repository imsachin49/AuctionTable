import Image from "next/image";
import Link from "next/link";
import TimeLeft from "./TimeLeft";
import AuctionStatus from "./AuctionStatus";
import ShareButton from "./ShareButton";
import { Exo_2 } from "next/font/google";

const exo = Exo_2({ subsets: ["latin"] });
interface ProductProps {
  name: string;
  currentPrice: number;
  _id: string;
  pictures: string[];
  startTime: number;
  endTime: number;
}

export default function ProductCard({ product }: { product: ProductProps }) {
  return (
    <div className="rounded-md shadow-md  w-full">
      <div className="relative w-full h-[200px]">
        <Image
          src={product.pictures[0] || "/products/home1.jpg"}
          alt="product"
          layout="fill"
          objectFit="cover"
          className="rounded-t-md w-full"
        />
        <TimeLeft product={product} />
        <AuctionStatus product={product} />
      </div>
      <div className="flex flex-col  gap-[10px] p-2 py-2 mt-1">
        <div className={`${exo.className} font-semibold text-start text-md leading-[17px] text-black transition-all duration-500 group-hover:text-indigo-600`}>
          {product?.name?.slice(0, 30)}
        </div>
        <div className="text-[10px] text-zinc-500 font-semibold rounded-md gap-1 flex justify-between items-center">
          <div className={`${exo.className} font-semibold text-lg leading-8 text-indigo-600`}>
            ${product.currentPrice}.00
          </div>
          <ShareButton product={product} />
        </div>
        <Link
          href={`/items/${product._id}`}
          className={`${exo.className} w-full border flex items-center justify-center rounded-full my-2 px-2 py-[9px] text-xs bg-indigo-600 hover:bg-indigo-700 text-gray-100 capitalize font-semibold`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}