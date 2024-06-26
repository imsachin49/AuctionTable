"use client";
import UserBio from "./UserBio";
import ProfileTabs from "./ProfileTabs";
import useSWR from "swr";
import { getAllBidsByUser } from "@/services/productService";

interface UserProfileProps {
  id: string;
}

export default function UserProfile({ id }: UserProfileProps) {
  console.log("id====>", id);
  const {
    data: userBids,
    error: userBidError,
    isValidating: userBidLoading,
    mutate: mutateUserBids,
  } = useSWR(id ? `/api/player/${id}/bids/all` : null, () =>
    getAllBidsByUser(id)
  );
  console.log("userBids====>", userBids.data);
  // 6667a79f1a64cd20f8feff93

  return (
    <div className="w-full max-w-xl flex flex-col gap-4">
      <UserBio bidCount={userBids?.data?.length || 0} />
      <ProfileTabs userBids={userBids?.data} isLoading={userBidLoading} />
    </div>
  );
}
