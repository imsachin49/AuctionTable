export default function ProductImagesSkeleton() {
  return (
    <div className="flex gap-2 w-full">
      <div className="flex flex-col justify-between gap-3 w-[100px]">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="flex-1 rounded-md bg-gray-200 animate-shimmer"
          ></div>
        ))}
      </div>
      <div className="carousel-container flex justify-center items-center w-full md:max-h-[290px] lg:max-h-[260px]">
        <div className="w-full h-[260px] bg-gray-200 animate-shimmer rounded-md"></div>
      </div>
    </div>
  );
}
