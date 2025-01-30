"use client";
import React from "react";
import Image from "next/image";
import heartbg from "../../assets/heart-icon.svg";
import heartbrd from "../../assets/heart-brd.svg";

interface NFTItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  bidders: number;
  liked: boolean;
  onLike: (id: number) => void;
}

const NFTCard: React.FC<NFTItemProps> = ({
  id,
  name,
  image,
  price,
  bidders,
  liked,
  onLike,
}) => (
  <article key={id}>
    <div className="flex flex-col gap-3 mb-2">
      <Image
        src={image}
        alt={name}
        className="w-full aspect-[3/4] object-cover rounded-2xl"
        width={100}
        height={100}
      />
      <p className="font-semibold text-base">{name}</p>
    </div>
    <div className="flex flex-col gap-3">
      <div className="inline-flex items-center justify-between mb-2">
        <p className="text-gray-500 text-sm">22:59</p>
        <span className="bg-[#514CFF26] text-[#514CFF] px-3 py-1 rounded-[4px] text-[13px] font-medium">
          {price} ETH
        </span>
      </div>

      <div className="inline-flex items-center justify-between pt-3 border-t border-[#262840]">
        <p className="text-[#7780A1] text-sm">{bidders} people are bidding</p>
        <button className="focus:outline-none" onClick={() => onLike(id)}>
          <Image src={liked ? heartbg : heartbrd} alt="heart-icon"/>
          
        </button>
      </div>
    </div>
  </article>
);

export default NFTCard;
