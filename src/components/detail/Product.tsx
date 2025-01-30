"use client";
import React from "react";
import unsplashImg from "../../assets/unsplash.png";
import BrookSimAvatar from "../../../public/brookSim.png";
import AfterlifeAvatar from "../../../public/afterlife.png";
import Image from "next/image";
import BidHistoryChart from "./BidHistoryChart";

const Product = () => {
  return (
    <section className=" flex justify-center w- items-center min-h-screen px-20">
      <article className="relative flex item-center flex-wrap md:flex-nowrap justify-center max-w-[950px] w-full rounded-[20px] p-4 gap-5 border border-[#262840] ">
        <div className="left hidden md:block">
          <Image
            src={unsplashImg}
            priority={false}
            width={684}
            height={858}
            alt=""
            className="rounded-[20px]"
          />
        </div>
        <div className="absolute  flex flex-col justify-center items-center gap-5 right-[-25px] top-10">
          <div className="text-[#7780A1] w-[46px] h-[46px] bg-[#060714] border border-[#262840] flex justify-center items-center rounded-full"></div>
          <div className="text-[#7780A1] bg-[#060714] w-[46px] h-[46px] border border-[#262840] flex justify-center items-center rounded-full"></div>
          <div className="text-[#7780A1] bg-[#060714] w-[46px] h-[46px] border border-[#262840] flex justify-center items-center rounded-full"></div>
        </div>
        <div className="right">
          <div className="mb-5">
            <h3 className="text-[40px] text-[#fff] font-semibold leading-[50px] mt-5 mb-2">
              Dui accumsan leo vestibulum ornare
            </h3>
            <p className="text-[16px] text-[#7780A1] mb-6">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>
          </div>
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Image
                src={BrookSimAvatar}
                priority={false}
                width={40}
                height={40}
                alt="Creator"
              />

              <div>
                <p className="text-sm text-[#7780A1]">Creator</p>
                <p className="text-sm text-[#fff]">@brook_sim</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={AfterlifeAvatar}
                priority={false}
                width={40}
                height={40}
                alt="Creator"
              />

              <div>
                <p className="text-sm text-[#7780A1]">Creator</p>
                <p className="text-sm text-[#fff]">Afterlife</p>
              </div>
            </div>
          </div>

          <div className="bg-[#060714] bg-gradient-to-r from-[rgba(255,255,255,0.07)] to-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.07)] rounded-[20px] border border-[#262840] p-8 w-[495px] ">
            <div className="flex justify-between items-center  mb-5">
              <div className="">
                <span className="text-[#7780A1] text-[14px]">
                  Current price
                </span>
                <p className="text-white text-[56px] font-semibold">
                  5.25 <span className=" text-[24px] font-bold">ETH</span>
                </p>
              </div>
              <div className=" ">
                <p className="text-[#7780A1] text-[14px]">Time left</p>
                <p className="text-[24px] text-white font-semibold">
                  22:59 min
                </p>
                <span className="text-[#7780A1] text-[12px]">
                  (01.01.2022 - 01:40:47)
                </span>
              </div>
            </div>
            <button className="py-[16px] px-[24px] w-full text-white rounded-[12px] bg-gradient-to-tr from-[#4745D0] via-[#3B39CB] to-[#2A27C9] shadow-[inset_-4px_-4px_4px_rgba(0,0,0,0.10),inset_4px_4px_4px_rgba(255,255,255,0.10)] ">
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
