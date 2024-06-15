import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import BidButton from "./PlaceBidButton";

export const BidConfirmationDialog = ({ bidAmount, placeBid }: any) => (
  <AlertDialog>
    <BidButton onClick={placeBid} />
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Are you sure you want to bid an amount of ${bidAmount}?
        </AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will lead you to the highest bidder
          of this product, so are you sure about this?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel onClick={() => {}}>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={placeBid}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);