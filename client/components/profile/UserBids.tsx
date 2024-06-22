import UserBidsSkeleton from "../skeletons/UserBidSkeleton";

export default function UserBids() {
  return <UserBidsSkeleton />;
  return (
    <div className="w-full h-full">
      <div className="flow-root">
        <ul role="list" className="max-h-[290px] overflow-auto space-y-2 mx-1 px-1">
          {[1, 2, 3, 4, 5,6,7,8,9,10].map((item) => (
            <li className="py-3 px-2 rounded-md border border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="w-10 h-10 rounded-full" src="/user-info.avif" alt="Neil image"/>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium truncate text-gray-800">Product Name</p>
                  <p className="text-xs truncate text-gray-500">Sun, 2024 Jun 10:23 PM</p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-800">$320</div>
              </div>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}