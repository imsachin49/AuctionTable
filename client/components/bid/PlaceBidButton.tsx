"use client";
import LoginButton from "../LoginModal";
import BidActionButton from "./BidActionButton";
import { GrClosedCaption } from "react-icons/gr";
import { FaHourglassStart } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { BidConfirmationDialog } from "./BidConfirmationDialog";

interface BidButtonProps {
  product:{
    data:{
      startTime: number;
      endTime: number;
    }
  },
  bidAmount: number;
  placeBid: () => void;
}

const BidButton = ({ product,bidAmount,placeBid}:BidButtonProps) => {
  const { data: session } = useSession();
  const now = new Date().getTime();

  if(session && now > product?.data?.startTime && now < product?.data?.endTime){
    return <BidConfirmationDialog placeBid={placeBid} bidAmount={bidAmount} />
  }
  else if(!session && now > product?.data?.startTime && now < product?.data?.endTime){
    return <LoginButton title="Login" variant="hot" />
  } 
  else if(now < product?.data?.startTime){
    return <BidActionButton title="Not Started" variant="end" icon={<FaHourglassStart/>} />
  } 
  else if(now > product?.data?.endTime){
    return <BidActionButton title="Auction End" variant="start" icon={<GrClosedCaption size={22}/>} />
  }else{
    return null;
  }
};

export default BidButton;