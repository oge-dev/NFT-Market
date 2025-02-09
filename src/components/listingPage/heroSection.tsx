import React from "react";
import nftText from "../../assets/Text.png";
import Image from "next/image";
import Logotypes from "./logotypes";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('/Background.png')] bg-cover bg-center relative">
      <div className="absolute bg-[url('/Squares.png')] bg-contain bottom-0 inset-x-0 z-[-2] h-[655px] pointer-events-none"></div>
      <div className="mt-48">
        <Image
          src={nftText}
          width={837}
          height={351}
          priority={false}
          alt="nftTextImg"
        />
      </div>
      <div className="flex justify-center items-center w-[643px] h-[84px] bg-rest-white rounded-[16px] shadow-[0px_25px_75px_0px_rgba(6,7,20,0.1)] mt-20">
        <input
          type="search"
          className="flex-grow h-full rounded-[16px] font-custom-16 focus:outline-none px-2 text-On-White-Dark-90 font-inter leading-[24px] tracking-[0.2px]"
          placeholder="Items, collections and creators"
          aria-label="Search"
        />
        <select
          className="flex-grow h-full rounded-[16px] font-custom-16 focus:outline-none px-2 text-On-White-Dark-90 font-inter leading-[24px] tracking-[0.2px]"
          aria-label="Filter options"
        >
          <option value="">Categories</option>
          <option value="products">Products</option>
          <option value="brands">Brands</option>
        </select>
      </div>
      <Logotypes />
    </div>
  );
};

export default HeroSection;
