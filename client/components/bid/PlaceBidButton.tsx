"use client";
import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const BidButton = ({ onClick }: { onClick: () => void }) => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <AlertDialogTrigger
          className={`border flex items-center justify-center w-full rounded-[4px] px-3 py-1 text-xs bg-[#32c36c] hover:bg-green-600 text-gray-100 capitalize font-semibold`}
        >
          Place a bid
        </AlertDialogTrigger>
      ) : (
        <button
          className="border flex items-center justify-center w-full rounded-[4px] px-3 py-1 text-xs bg-rose-500 hover:bg-rose-600 text-gray-100 capitalize font-semibold"
          onClick={() => router.push("/login")}
        >
          Login to bid
        </button>
      )}
    </>
  );
};

export default BidButton;
