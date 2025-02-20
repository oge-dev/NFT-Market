"use client";
import React, { useState } from "react";
import NFTCard from "../detail/NftCard";
import { StaticImageData } from "next/image";
import unsplashGridImg from "../../assets/unsplash_TVQFl9R-MLQ.png";
import unsplashGridImg1 from "../../assets/unsplash_z7pnyucFR5s.png";

interface NFTItem {
  id: number;
  name: string;
  image: StaticImageData;
  price: number;
  bidders: number;
  liked: boolean;
}

const initialNFTs: NFTItem[] = [
  {
    id: 1,
    name: "Faucibus habitasse at et platea massa mauris",
    image: unsplashGridImg,
    price: 2.55,
    bidders: 101,
    liked: false,
  },
  {
    id: 2,
    name: "Diam purus sagittis nisl erat mauris",
    image: unsplashGridImg1,
    price: 2.55,
    bidders: 101,
    liked: false,
  },
  {
    id: 3,
    name: "Faucibus habitasse at et platea massa mauris",
    image: unsplashGridImg,
    price: 2.55,
    bidders: 101,
    liked: false,
  },
  {
    id: 4,
    name: "Diam purus sagittis nisl erat mauris",
    image: unsplashGridImg1,
    price: 2.55,
    bidders: 101,
    liked: false,
  },
  // Add other items as necessary
];

const NFTGrid: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [nfts, setNfts] = useState<NFTItem[]>(initialNFTs.slice(0, 6));
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLikeBtn = (id: number) => {
    setNfts((prev) =>
      prev.map((nft) => (nft.id === id ? { ...nft, liked: !nft.liked } : nft))
    );
  };

  const handleToggleView = () => {
    if (isExpanded) {
      setNfts(initialNFTs.slice(0, 6));
      setVisibleCount(6);
      setIsExpanded(false);
    } else {
      const nextBatch = initialNFTs.slice(visibleCount, visibleCount + 6);
      setNfts((prev) => [...prev, ...nextBatch]);
      setVisibleCount((prev) => prev + 6);
      if (visibleCount + 6 >= initialNFTs.length) {
        setIsExpanded(true);
      }
    }
  };

  return (
    <div className="flex flex-col mx-auto justify-center item-center mt-20">
      <div className="mx-auto text-center mb-10">
        <span>OVERLINE</span>
        <h2 className="text-[#fff] text-[32px]">More from this author</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {nfts.map((nft) => (
          <NFTCard key={nft.id} {...nft} onLike={handleLikeBtn} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={handleToggleView}
          className="px-4 shadow-[#0000001A] py-2 border-[2px] border-[#7780A1] text-gray-600 rounded-[12px] transition-colors"
        >
          {isExpanded ? "Show less" : "Show me more"}
        </button>
      </div>
    </div>
  );
};

export default NFTGrid;
