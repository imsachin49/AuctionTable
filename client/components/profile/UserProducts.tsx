"use client";
import { fetchProducts } from "@/services/productService";
import UserProductCard from "./UserProductCard";
import UserProductsSkeleton from "../skeletons/UserProductCardSkeleton";
import useSWR from "swr";

export default function UserProducts({ userPlayers, isLoading }: any) {
  if (isLoading) return <UserProductsSkeleton />;

  return (
    <div className="text-blue-950 w-full">
      <div className="flex flex-wrap items-center justify-center gap-[3px]">
        {userPlayers?.map((product: any) => (
          <UserProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
