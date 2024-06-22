"use client";
import { AiOutlineProject } from "react-icons/ai";
import { VscBookmark } from "react-icons/vsc";
import { GrUserAdmin } from "react-icons/gr";
import { RiAuctionFill } from "react-icons/ri";
import { Open_Sans } from "next/font/google";
import { useState } from "react";
import { TabButton } from "./TabButton";
import UserProducts from "./UserProducts";
import UserBids from "./UserBids";
import UserWins from "./UserWins";
import UserSavedProducts from "./UserSavedProducts";

const open = Open_Sans({ subsets: ["latin"] });
export default function ProfileTabs() {
    const [tab, setTab] = useState<string>("products");

    return (
        <div className={`${open.className} flex sm:p-2 p-[2px] flex-col gap-4`}>
            <div className="flex items-center justify-between w-full border-t">
                <TabButton icon={<AiOutlineProject />} text="Products" tab="products" currentTab={tab} setTab={setTab} />
                <TabButton icon={<RiAuctionFill />} text="Bids" tab="my-bids" currentTab={tab} setTab={setTab} />
                <TabButton icon={<VscBookmark />} text="Saved" tab="saved" currentTab={tab} setTab={setTab} />
                <TabButton icon={<GrUserAdmin />} text="Owned" tab="owned" currentTab={tab} setTab={setTab} />
            </div>
            <div className="flex items-center justify-center">
                {tab === "products" && <UserProducts />}
                {tab === "my-bids" && <UserBids />}
                {tab === "saved" && <UserSavedProducts />}
                {tab === "owned" && <UserWins />}
            </div>
        </div>
    );
}