"use client";
import ItemCard from "@/components/ItemCard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";
import useSWR from "swr";
import { fetchProducts } from "@/services/productService";

export default function page() {
  const { data: productsData } = useSWR("/", fetchProducts);

  return (
    <>
      <Navbar />
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="text-center w-full flex h-fit gap-2 m-1 rounded-md flex-wrap items-center justify-center mb-10">
          {productsData?.data?.map((product: any) => {
            return <ItemCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}
