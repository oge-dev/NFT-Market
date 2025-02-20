import React from "react";
import AuctionCard from "./AuctionCard";
import Auctions from "./data/auctionData";



export default function LiveAuction() {
  return (
    <div className="min-h-screen flex flex-col items-center mt-20 p-10">
      <h1 className="text-rest-white text-[36px] font-600 tracking-[0.2px] mb-16">
        Latest Live Auctions</h1>
      <div className="flex gap-6">
        {Auctions.map((auction) => (
           <AuctionCard key={auction.id} {...auction} />
        ))}
      </div>
    </div>
  );
}
