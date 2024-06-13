"use client";
import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import useDebounce from "./hooks/use-debounce";
import useSWR from "swr";
import { searchPlayers } from "@/services/productService";

export default function SearchPlayer() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500); 
  const { data: players } = useSWR(debouncedSearchTerm ? `/api/player/search/all?name=${debouncedSearchTerm}` : null, searchPlayers);

  return (
    <div className="3xl:flex items-center justify-center w-[600px] hidden">
      <input
        type="text"
        placeholder="Search for a product"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded-md rounded-r-none text-sm w-full outline outline-transparent placeholder:text-sm placeholder:text-gray-600"
      />
      <button className="border p-[7px] bg-[#a33434] rounded-r-md">
        <IoSearch className="text-2xl text-white" />
      </button>
    </div>
  );
}