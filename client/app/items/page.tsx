"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import useSWR from "swr";
import { fetchProducts, searchPlayers } from "@/services/productService";
import Footer from "@/components/Footer";
import ProductListing from "@/components/ProductListing";
import { IoIosSearch } from "react-icons/io";
import useDebounce from "@/hooks/use-debounce";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data: productsData, isValidating: productsLoading } = useSWR(
    "/",
    fetchProducts,
    {
      refreshInterval: 120000, // refresh every 2 minutes
    }
  );
  const { data: searchProductsData, isValidating: searchLoading } = useSWR(
    debouncedSearchTerm
      ? `/api/player/search/all?name=${debouncedSearchTerm}`
      : null,
    () => searchPlayers(debouncedSearchTerm)
  );

  const notFound =
    searchTerm !== "" &&
    !searchLoading &&
    searchProductsData?.data &&
    searchProductsData?.data?.length === 0;

  const isLoading = searchLoading || productsLoading;

  return (
    <>
      <Navbar />
      <div className="flex min-h-fit">
        {/* <Sidebar /> */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex items-center justify-center">
            <div className="my-3 w-full">
              <div className="text-xl sm:text-3xl font-bold text-center">
                Explore <span className="text-[brown]">Upcoming</span> Auctions
              </div>
              <div className="w-full flex items-center justify-center my-2">
                <div className="w-[80%] md:w-[55%] my-2 relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    maxLength={50}
                    placeholder="Search for items"
                    className="border border-gray-300 font-normal px-3 py-3 outline-none rounded-lg text-sm pl-[35px] w-full text-gray-800 placeholder:text-gray-600"
                  />
                  <IoIosSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          {notFound ? (
            <div className="w-full flex items-center justify-center h-[100px]">
              <h1 className="text-2xl font-semibold text-center text-gray-600  subpixel-antialiased ">
                No items found for Your search term
              </h1>
            </div>
          ) : (
            <ProductListing
              productsData={
                searchTerm !== "" ? searchProductsData : productsData
              }
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
