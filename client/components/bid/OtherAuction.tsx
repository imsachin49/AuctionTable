import React from "react";
import ProductCard from "../ProductCard";

export default function OtherAuction({ otherauction }: { otherauction: any }) {
  // if (otherauction?.data?.length === 0) {
    return (
      <div className="text-xs  p-8 text-center">
        Other Live Auctions will be shown here!!
      </div>
    );
  // }

  // return (
  //   <div className="w-full flex items-center justify-center">
  //     <div className="flex flex-wrap gap-3 max-w-4xl items-center justify-center">
  //       {otherauction?.data?.map((product: any) => (
  //         <ProductCard key={product._id} product={product} />
  //       ))}
  //     </div>
  //   </div>
  // );
}
