import React from "react";
import { MdOutlineDoneAll } from "react-icons/md";

interface LongDescriptionProps {
  product: {
    data:{
      name: string;
      description: string;
    }
  }
}

export default function LongDescription({product}: LongDescriptionProps) {
  return (
    <>
      <div className="font-bold">
        {product?.data?.name || "Product Name"}
      </div>
      <span className="text-xs text-blue-950">
        {product?.data?.description || "Product Description"}
        <br />
        <br />
        But getting your own auction site up and running has always required
        learning complex coding langua ges, or hiring an expensive design firm
        for thousands of dollars and months of work.
      </span>
      <br />
      <br />
      <div className="flex gap-2 flex-col">
        <div className="text-xs text-gray-800 flex gap-2">
          <MdOutlineDoneAll className="text-indigo-500" />
          <span>
            Amet consectetur adipisicing elit. Maxime reprehenderit quaerat,
            velit rem atque vel impedit! Expensive Design.{" "}
          </span>
        </div>
        <div className="text-xs text-gray-800 flex gap-2">
          <MdOutlineDoneAll className="text-indigo-500" />
          <span>
            Consectetur adipisicing elit. Maxime reprehenderit quaerat
          </span>
        </div>
        <div className="text-xs text-gray-800 flex gap-2">
          <MdOutlineDoneAll className="text-indigo-500" />
          <span>
            Fuga magni veritatis ad temporibus atque adipisci nisi rerum...
          </span>
        </div>
      </div>
    </>
  );
}
