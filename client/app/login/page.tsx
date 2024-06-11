"use client";
import Navbar from "@/components/Navbar";
import React,{useEffect} from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function page() {
  const { data: session } = useSession();
  const pathname=usePathname();

  // useEffect(() => {
  //   if (session) {
  //     router.push(callbackUrl as string || '/');
  //   }
  // }, [session, callbackUrl]);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-[350px]">
        <div className="flex flex-col gap-7 py-2 px-3">
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-bold">Sign in</h4>
            <p className="text-sm text-gray-500">to continue to platform</p>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => signIn("google", { callbackUrl:pathname })}
              className="flex w-full gap-3 border p-2 items-center pl-4 rounded-md border-blue-100 cursor-pointer hover:bg-[#f1f5f9]"
            >
              <FcGoogle size={22} />
              <span className="text-black text-sm">Continue with Google</span>
            </button>
            <button
              onClick={() => signIn("github", { callbackUrl: pathname })}
              className="flex w-full gap-3 border p-2 items-center pl-4 rounded-md border-blue-100 cursor-pointer hover:bg-[#f1f5f9]"
            >
              <FaGithub size={22} />
              <span className="text-black text-sm">Continue with Github</span>
            </button>
          </div>
          <div className="text-[13px] px-1 text-gray-500 font-candara">
            By creating an account, you agree to our{" "}
            <span className="hover:underline text-blue-400 cursor-pointer ">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="hover:underline text-blue-400 cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </>
  );
}