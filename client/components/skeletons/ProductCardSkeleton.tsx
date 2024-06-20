export default function ProductCardSkeleton(){
  return (
    <div className="rounded-md shadow-sm  w-full">
      <div className="relative w-full h-[200px]">
        <div className="h-[200px] w-full bg-gray-300 rounded-t-md animate-pulse" />
      </div>
      <div className="flex flex-col  gap-[10px] p-2 py-2 mt-1">
        <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse" />
        <div className="flex items-center justify-between">
          <div className="h-6 w-1/2 bg-gray-300 rounded-md animate-pulse" />
          <div className="h-[30px] w-[30px] bg-gray-300 rounded-full animate-pulse" />
        </div>
        <div className="h-8 rounded-full bg-gray-300 animate-pulse w-full my-3" />
      </div>
    </div>
  );
};