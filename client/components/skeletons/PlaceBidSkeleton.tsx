export default function PlaceBidSkeleton(){
    return (
      <div className="border border-gray-100 px-2 py-3 sm:p-4 w-full rounded-md shadow-md animate-pulse">
        <div className="font-bold text-xl pb-[2px] text-gray-950">Base Price: $00.00</div>
        <div className="text-xs text-gray-500 font-medium pb-2">Bid Amount : Minimum Bid &nbsp;(+ $20.00)</div>
        <div className="relative space-x-1 mt-[3px] mb-4">
          <div className="text-xs text-gray-500 font-medium w-[40px] bg-indigo-600 p-[1px] absolute -top-2 rounded-full"></div>
          <div className="text-xs text-gray-500 font-medium w-[5px] bg-indigo-600 p-[1px] absolute -top-2 left-10 rounded-full"></div>
        </div>
        <div className="flex gap-2">
          <div className="w-2/3 h-10 bg-gray-200 rounded-md"></div>
          <div className="w-1/3 h-10 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    );
  };