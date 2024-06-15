import toast, { Toaster } from "react-hot-toast";
import { FiPlus, FiMinus } from "react-icons/fi";

interface BidAmountInputProps {
  bidAmount: number;
  setBidAmount: any;
  currentPrice: number;
  startTime: number;
  endTime: number;
  isLoggedIn: boolean;
}

export const BidAmountInput = ({
  bidAmount,
  setBidAmount,
  currentPrice,
  startTime,
  endTime,
  isLoggedIn
}: BidAmountInputProps) => {
  const incrementBidAmount = () => {
    setBidAmount((prev: any) => prev + 20);
  };

  const decrementBidAmount = () => {
    if (bidAmount > currentPrice) {
      setBidAmount((prev: any) => prev - 20);
    } else {
      toast.error(`Minimum bid amount is $${currentPrice}.00`);
    }
  };

  // conditionally show input based on time and user login status
  const showInput=(startTime>new Date().getTime() || endTime<new Date().getTime() || !isLoggedIn);

  return (
    <form className={`flex border items-center flex-1 justify-between`}> 
      <button type="button" className={`px-2 py-2 ${showInput && "cursor-not-allowed"}`} onClick={decrementBidAmount}>
        <FiMinus className="w-3 h-4 text-gray-90" />
      </button>
      <input
        type="text"
        value={`$${bidAmount}.00`}
        className="text-center text-gray-950 outline-none text-xs"
      />
      <button type="button" className={`px-2 py-2 ${showInput && "cursor-not-allowed"}`} onClick={incrementBidAmount}>
        <FiPlus className="w-3 h-4 text-gray-900" />
      </button>
      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
};
