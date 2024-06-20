"use client";
import Image from "next/image";
import { useState } from "react";
import ProductImagesSkeleton from "../skeletons/ProductImageSkeleton";

interface ProductDetailsCarouselProps {
  pictures: string[];
  isLoading: boolean;
}

export default function ProductImages({
  pictures,
  isLoading,
}: ProductDetailsCarouselProps) {
  if (isLoading) return <ProductImagesSkeleton />;
  const [currentImage, setCurrentImage] = useState<number>(0);

  return (
    <div className="flex gap-2 w-full">
      <div className="flex flex-col justify-between gap-2 w-[100px]">
        {pictures?.map((picture, index) => (
          <img
            key={index}
            src={picture || "/prod-gallery1.png"}
            alt={`img${index}`}
            className={`flex-1 rounded-md cursor-pointer max-h-[100px] ${
              currentImage === index
                ? "border-2 border-[brown]"
                : "border-2 border-transparent"
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
      <div className="carousel-container flex justify-center items-center w-full md:max-h-[290px] lg:max-h-[260px]">
        <img
          src={
            pictures?.length > 0 ? pictures[currentImage] : "/prod-gallery1.png"
          }
          alt="currentImage"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
}