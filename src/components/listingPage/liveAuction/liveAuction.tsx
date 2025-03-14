"use client";
import React from "react";
import AuctionCard from "./AuctionCard";
import Auctions from "./data/auctionData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function LiveAuction() {
  return (
    <div className="w-full py-10">
      <h1 className="text-rest-white text-[36px] font-600 text-center mt-20 mb-6">
        Latest Live Auctions
      </h1>
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3.5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          640: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
      >
        {Auctions.map((auction) => (
          <SwiperSlide key={auction.id}>
            <AuctionCard {...auction} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
