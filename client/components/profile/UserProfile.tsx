"use client";
import UserBio from "./UserBio";
import ProfileTabs from "./ProfileTabs";
import useSWR from "swr";
import { getAllBidsByUser,getUserPlayers } from "@/services/productService";

interface UserProfileProps {
  id: string;
}

export default function UserProfile({ id }: UserProfileProps) {
  const {data: userBids,error: userBidError,isValidating: userBidLoading,mutate: mutateUserBids} = useSWR(id ? `/api/player/${id}/bids/all` : null, () =>getAllBidsByUser(id));
  const {data: userPlayers,error: userPlayerError,isValidating: userPlayerLoading,mutate: mutateUserPlayers} = useSWR(id ? `/api/player/${id}/user/all` : null, () =>getUserPlayers(id));
  console.log("userPlayers====>",userPlayers)

  return (
    <div className="w-full max-w-xl flex flex-col gap-4">
      <UserBio bidCount={userBids?.data?.length || 0} userPlayerCount={userPlayers?.data?.length || 0} />
      <ProfileTabs userBids={userBids?.data} userPlayers={userPlayers?.data} isUserPlayerLoading={userPlayerLoading} isLoading={userBidLoading} />
    </div>
  );
}