import toast, { Toaster } from "react-hot-toast";
import { FiPlus, FiMinus } from "react-icons/fi";

export const BidAmountInput = ({
  bidAmount,
  setBidAmount,
  currentPrice,
}: any) => {
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

  return (
    <form className="flex border items-center flex-1 justify-between">
      <button type="button" className="px-2 py-2" onClick={decrementBidAmount}>
        <FiMinus className="w-3 h-4 text-gray-90" />
      </button>
      <input
        type="text"
        value={`$${bidAmount}.00`}
        readOnly
        className="text-center text-gray-700 outline-none text-xs font-sans"
      />
      <button type="button" className="px-2 py-2" onClick={incrementBidAmount}>
        <FiPlus className="w-3 h-4 text-gray-900" />
      </button>
      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
};