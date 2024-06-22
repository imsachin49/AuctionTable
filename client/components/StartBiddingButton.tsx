"use client";
import { FaRightLong } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

const StartBiddingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/items"
      className={`border px-4 py-3 rounded-md bg-gray-900 text-gray-100 flex items-center justify-center gap-1 transition-transform duration-300 ease-in-out transform ${
        isHovered ? "scale-105" : "scale-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Start Bidding
      <FaRightLong
        className={`text-white transition-transform duration-300 ease-in-out ${
          isHovered ? "translate-x-1" : "translate-x-0"
        }`}
        size={20}
      />
      <style jsx>{`
        .hover\:bg-gray-800:hover {
          background-color: #2d3748;
        }
      `}</style>
    </Link>
  );
};

export default StartBiddingButton;
