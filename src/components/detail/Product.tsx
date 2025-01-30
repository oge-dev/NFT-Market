"use client";
import React from "react";
import img from "../../assets/unsplash.png";
import Image from "next/image";
import BidHistoryChart from "./BidHistoryChart";

const Product = () => {
  return (
    <section className=" flex justify-center w- items-center min-h-screen px-20">
      <article className="relative flex item-center flex-wrap md:flex-nowrap justify-center  max-w-[950px] w-full rounded-[20px] p-4 gap-5 border border-[#262840] ">
        <div className="left hidden md:block">
          <Image src={img}  priority={false} alt="" className=" rounded-[20px]" />
        </div>
        <div className="absolute  flex flex-col justify-center items-center gap-5 right-[-25px] top-10">
          <div className="text-[#7780A1] w-[46px] h-[46px] bg-[#060714] border border-[#262840] flex justify-center items-center rounded-full"></div>
          <div className="text-[#7780A1] bg-[#060714] w-[46px] h-[46px] border border-[#262840] flex justify-center items-center rounded-full"></div>
          <div className="text-[#7780A1] bg-[#060714] w-[46px] h-[46px] border border-[#262840] flex justify-center items-center rounded-full"></div>
        </div>
        <div className="right">
          <div className="mb-5">
            <h3 className="text-[40px] font-semibold leading-[50px] mt-5 mb-2">
              Dui accumsan leo vestibulum ornare
            </h3>
            <p className="text-[#7780A1] mb-6">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>
          </div>
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <img
                src="/api/placeholder/32/32"
                alt="Creator"
                className="w-[40px] h-[40px] rounded-full"
              />

              <div>
                <p className="text-sm text-[#7780A1]">Creator</p>
                <p className="text-sm text-[#000]">@brook_sim</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
              <div>
                <p className="text-sm text-[#7780A1]">Creator</p>
                <p className="text-sm text-[#000]">Afterlife</p>
              </div>
            </div>
          </div>

          <div className="bg-linear rounded-[20px] border border-[#262840] p-8 w-[496px] ">
            <div className="flex justify-between items-center  mb-5">
              <div className="">
                <span className="text-[#7780A1] text-[12px]">
                  Current price
                </span>
                <p className="text-white text-[56px] font-semibold">
                  5.25 <span className=" text-[24px] font-bold">ETH</span>
                </p>
              </div>
              <div className=" ">
                <p className="text-[#7780A1] text-[12px]">Time left</p>
                <p className="text-[24px] text-white font-semibold">
                  22:59 min
                </p>
                <span className="text-[#7780A1] text-[12px]">
                  (01.01.2022 - 01:40:47)
                </span>
              </div>
            </div>
            <button className="btn-clr py-[12px] px-[24px] w-full text-white rounded-[14px]">
              Place a bid
            </button>
          </div>
          <BidHistoryChart />
        </div>
      </article>
    </section>
  );
};

export default Product;
