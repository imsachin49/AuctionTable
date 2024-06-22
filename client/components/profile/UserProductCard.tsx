import Image from "next/image";
import { Exo_2 } from "next/font/google";
import Link from "next/link";
const exo = Exo_2({ subsets: ["latin"] });

interface UserProductCardProps {
  product: any;
}

export default function UserProductCard({product}: UserProductCardProps) {
  return (
    <Link href={`/items/${product._id}`} className="relative min-w-[140px] h-[150px] rounded-md cursor-pointer">
      <Image src={`${product.pictures[0]} || /products/home1.jpg`} alt="product" layout="fill" objectFit="cover" className="rounded-md w-full opacity-90" />
      <div className="absolute bottom-0 w-full flex flex-col rounded-b-md bg-zinc-200/25 p-1">
        <span className="font-semibold text-gray-50 text-[8px]"> {product?.name?.slice(0,25)}</span>
        <span className="font-semibold text-gray-50 text-[8px]">${product.currentPrice}.00</span>
      </div>
    </Link>
  );
}
