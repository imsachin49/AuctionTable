import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { RiAuctionFill } from "react-icons/ri";
import BidActionButton from "./BidActionButton";

export const BidConfirmationDialog = ({ bidAmount, placeBid }: any) => (
  <AlertDialog>
  <AlertDialogTrigger>
    <BidActionButton title="Place A Bid" variant="bid" icon={<RiAuctionFill/>}  />          
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>
        Are you sure you want to bid an amount of ${bidAmount}?
      </AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will lead you to the highest
        bidder of this product, so are you sure about this?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel onClick={() => {}}>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={placeBid}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
);