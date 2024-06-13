"use client";
import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useSession } from "next-auth/react";
import LoginButton from "../LoginModal";

const BidButton = ({ onClick }: { onClick: () => void }) => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <AlertDialogTrigger
          className={`flex-1 border flex items-center justify-center w-full rounded-[4px] px-3 py-1 text-xs bg-[#32c36c] hover:bg-green-600 text-gray-100 capitalize font-semibold text-nowrap`}
        >
          Place a bid
        </AlertDialogTrigger>
      ) : (
        <LoginButton title="Login" variant="hot" />
      )}
    </>
  );
};

export default BidButton;
