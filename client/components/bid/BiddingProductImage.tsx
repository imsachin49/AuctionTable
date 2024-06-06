import Image from "next/image";

export default function BiddingProductImage() {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <img
          className="flex-1 max-h-[90px] w-[70px] m-1 rounded-sm"
          src="/prod-gallery1.png"
          alt="Product Image"
        />
        <img
          className="flex-1 max-h-[90px] w-[70px] m-1 rounded-sm"
          src="/prod-gallery2.png"
          alt="Product Image"
        />
        <img
          className="flex-1 max-h-[90px] w-[70px] m-1 rounded-sm"
          src="/prod-gallery3.png"
          alt="Product Image"
        />
      </div>
      <div className="relative">
        <img
          className="max-h-[270px] m-1 rounded-sm max-w-[320px]"
          src="/prod-gallery3.png"
          alt="Product Image"
        />
      </div>
    </div>
  );
}
