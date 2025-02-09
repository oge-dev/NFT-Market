// importation of compontents
import React from "react";
import Image from "next/image";
import Link from "next/link";
import nftLogo from "../assets/Logo.png";

// header component
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-[1920px] w-full mx-auto h-[117px] px-8 py-4 flex justify-between items-center flex-shrink-0">
        {/* nft logo */}
        <div>
          <Link href="/">
            <Image
              src={nftLogo}
              width={213}
              height={34}
              priority={false}
              alt="nft-logo"
            />
          </Link>
        </div>

        {/* Menu section */}
        <nav className="flex justify-center items-start gap-16">
          <Link
            href="/"
            className="text-custom-16 font-custom-600 tracking-[0.2px]"
          >
            Auctions
          </Link>
          <Link
            href="/Roadmap"
            className="text-custom-16 font-custom-600 tracking-[0.2px]"
          >
            Roadmap
          </Link>
          <Link
            href="/Discover"
            className="text-custom-16 font-custom-600 tracking-[0.2px]"
          >
            Discover
          </Link>
          <Link
            href="/Community"
            className="text-custom-16 font-custom-600 tracking-[0.2px]"
          >
            Community
          </Link>
        </nav>

        {/* Contact & My account buttons */}
        <div className="flex justify-end items-center gap-16">
          <button className="flex py-4 px-6 items-center gap-2 border-2 border-on-white-dark-90 rounded-lg shadow-[inset_-4px_-4px_4px_0px_rgba(0,_0,_0,_0.1),_inset_4px_4px_4px_0px_rgba(255,_255,_255,_0.1)]">
            <Link
              href="/contact"
              className="text-custom-16 font-custom-600 text-on-white-grey-100 tracking-[0.2px]"
            >
              Contact
            </Link>
          </button>
          <button className="flex py-4 px-6 items-center gap-2 border-0 rounded-lg bg-gradient-to-r from-[#4745d0] to-[#2a27c9] shadow-[inset_-4px_-4px_4px_0px_rgba(0,_0,_0,_0.1),_inset_4px_4px_4px_0px_rgba(255,_255,_255,_0.1)]">
            <Link
              href="/myAccount"
              className="text-custom-16 font-custom-600 text-rest-white tracking-[0.2px]"
            >
              My account
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
