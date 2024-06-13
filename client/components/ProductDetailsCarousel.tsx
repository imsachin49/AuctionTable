import React from "react";

const ProductDetailsCarousel = () => {
  return (
    <div className="flex gap-2 w-full">
        <div className="flex flex-col justify-between gap-2 w-[100px]">
          <img src="/prod-gallery1.png" alt="img1" className="flex-1 rounded-md" />
          <img src="/prod-gallery2.png" alt="img2" className="flex-1 rounded-md" />
          <img src="/prod-gallery3.png" alt="img3" className="flex-1 rounded-md" />
        </div>
        <div className="carousel-container flex justify-center items-center w-full md:max-h-[290px] lg:max-h-[260px]">
          <img src="/prod-gallery1.png" alt="img4" className="w-full h-full object-cover rounded-md" />
        </div>
      </div>
  );
};

export default ProductDetailsCarousel;
