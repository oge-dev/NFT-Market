import React from "react";
import Image from "next/image";
import Auctions from "../../data/liveAuct"; // Import the Auctions data from the new file

const LiveAuction = () => {
  return (
    <div className="liveAuction">
      <h1>Live Auction</h1>
      <div className="auction">
       {/* Access the auctImg property */}
        {Auctions.map((auction, index) => (
          <div key={index}>
            <Image
              src={auction.auctImg} 
              width={400}
              height={520}
              priority={false}
              alt={`Auction item ${index + 1}`}
              className="auction-image"
            />
            <h4>{auction.auctText}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveAuction;
