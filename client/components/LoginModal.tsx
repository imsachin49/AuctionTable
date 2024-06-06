"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { BiUpload } from "react-icons/bi";
import { LuLogIn } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v: any) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger
        onClick={() => setIsOpen(true)}
        asChild
        className="lex items-center justify-center"
      >
        <Button
          variant="open"
          type="button"
          className="px-4 py-1 flex items-center font-semibold gap-2"
        >
          <LuLogIn size={15} />
          <span>Login</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <div className="flex flex-col gap-7 py-2 px-3">
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-bold">Sign in</h4>
            <p className="text-sm text-gray-500">to continue to platform</p>
          </div>
          <div className="space-y-2">
            <div className="flex gap-3 border p-2 items-center pl-4 rounded-md border-blue-100 cursor-pointer hover:bg-[#f1f5f9]">
              <FcGoogle size={22} />
              <span className="text-black text-sm">Continue with Google</span>
            </div>
            <div className="flex gap-3 border p-2 items-center pl-4 rounded-md border-blue-100 cursor-pointer hover:bg-[#f1f5f9]">
              <FaGithub size={22} />
              <span className="text-black text-sm">Continue with Github</span>
            </div>
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
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
