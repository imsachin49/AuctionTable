export default function UserBidsSkeleton() {
  return (
    <div className="w-full h-full">
      <div className="flow-root">
        <ul  className="max-h-[290px] overflow-auto space-y-2 mx-1 px-2">
          {[1, 2, 3].map((item) => (
            <li className="py-3 px-2 rounded-md border border-gray-100 animate-shimmer">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <div className="w-28 h-4 bg-gray-200 rounded"></div>
                  <div className="w-16 h-3 mt-1 bg-gray-200 rounded"></div>
                </div>
                <div className="w-12 h-6 bg-gray-200 rounded"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
