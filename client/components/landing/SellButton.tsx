"use client";
import toast, { Toaster } from "react-hot-toast";
import { MdSell } from "react-icons/md";

export default function SellButton() {
  return (
    <button
      onClick={() => toast.error("Please Contact Admin to Sell Items")}
      className="border px-4 py-3 rounded-md border-rose-400 hover:border-rose-500 hover:text-rose-500 flex items-center justify-center gap-1"
    >
      Sell Your Items
      <MdSell className="text-rose-400" size={20} />
      <Toaster />
    </button>
  );
}
