import React from "react";
import { Button } from "../ui/button";

interface BidActionButtonProps {
  title: string;
  variant: "open" | "hot" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "start" | "end" | "bid";
  icon: JSX.Element;
}

export default function BidActionButton({
  title,
  variant,
  icon,
}: BidActionButtonProps) {
  return (
    <Button
      variant={variant}
      type="button"
      className="px-4 py-1 flex-1 flex items-center justify-center font-semibold gap-2 capitalize text-nowrap w-full"
    >
      {icon}
      <span>{title}</span>
    </Button>
  );
}