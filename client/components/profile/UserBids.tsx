import UserBidsSkeleton from "../skeletons/UserBidSkeleton";
import UserBidCard from "./UserBidCard";

export default function UserBids({ userBids, isLoading }: any) {
  if (isLoading) return <UserBidsSkeleton />;

  return (
    <div className="w-full h-full">
      <div className="flow-root">
        <ul className="max-h-[215px] overflow-auto space-y-2 mx-1 px-1">
          {userBids?.map((item: any) => (
            <UserBidCard key={item} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}