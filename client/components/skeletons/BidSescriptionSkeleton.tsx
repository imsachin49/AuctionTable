export default function BiddingDescriptionSkeleton() {
  return (
    <div className="w-full flex rounded-lg flex-col gap-2 shadow-md border border-gray-200 p-3 animate-shimmer">
      <span className="font-bold text-lg leading-6 capitalize bg-gray-200 w-[95%] h-6 rounded-md"></span>
      <div className="w-[95%] max-w-4xl p-6 rounded-md shadow-sm bg-gray-200"></div>
    </div>
  );
}
