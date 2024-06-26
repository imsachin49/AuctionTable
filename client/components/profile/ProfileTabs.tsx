import NewUserProduct from "./NewUserProduct";
import NewUserBids from "./NewUserBids";

export default function ProfileTabs() {
  return (
    <div className="flex sm:p-2 p-[2px] flex-col gap-4">
      <div className="flex flex-col w-full gap-8">
        <NewUserBids />
        <NewUserProduct />
      </div>
    </div>
  );
}
