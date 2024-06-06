import React from "react";
import { MdOutlineDoneAll } from "react-icons/md";

export default function LongDescription() {
  return (
    <>
      <div className="font-bold">
        How can have anything you ant in life if you ?
      </div>
      <span className="text-xs text-gray-500">
        If you’ve been following the crypto space, you’ve likely heard of
        Non-Fungible Tokens (Biddings), more popularly referred to as ‘Crypto
        Collectibles.’ The world of Biddings is growing rapidly. It seems there
        is no slowing down of these assets as they continue to go up in price.
        This growth comes with the opportunity for people to start new
        businesses to create and capture value. The market is open for players
        in every kind of field. Are you a collector.
        <br />
        <br />
        But getting your own auction site up and running has always required
        learning complex coding langua ges, or hiring an expensive design firm
        for thousands of dollars and months of work.
      </span>
      <br />
      <br />
      <div className="flex gap-2 flex-col">
        <div className="text-xs text-gray-800 flex gap-2">
          <MdOutlineDoneAll className="text-green-500" />
          <span>
            Amet consectetur adipisicing elit. Maxime reprehenderit quaerat,
            velit rem atque vel impedit! Expensive Design.{" "}
          </span>
        </div>
        <div className="text-xs text-gray-800 flex gap-2">
          <MdOutlineDoneAll className="text-green-500" />
          <span>
            Consectetur adipisicing elit. Maxime reprehenderit quaerat
          </span>
        </div>
        <div className="text-xs text-gray-800 flex gap-2">
          <MdOutlineDoneAll className="text-green-500" />
          <span>
            Fuga magni veritatis ad temporibus atque adipisci nisi rerum...
          </span>
        </div>
      </div>
    </>
  );
}
