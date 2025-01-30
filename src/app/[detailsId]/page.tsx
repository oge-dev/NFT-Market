import React from "react";
import "@/styles/details.css";
import NFTGrid from "@/components/detail/NftGrid";
import Product from "@/components/detail/Product";
import Image from "next/image";
import Link from "next/link";
import nftLogo from "../../assets/Logo.png";

const Detail = () => {
  return (
    <section className="nft-details ">
      {/* nft topbar section */}
      <div className="nft-topbar">
        {/* nft topbar logo */}
        <div className="nft-topbar-logo">
          <Image
            src={nftLogo}
            width={213}
            height={34}
            priority={false}
            alt="logo"
          />
        </div>
        {/* nft topbar navbar menu section */}
        <nav className="nft-topbar-menu">
          <Link href="/">Auctions</Link>
          <Link href="/Roadmap">Roadmap</Link>
          <Link href="/Discover">Discover</Link>
          <Link href="/Community">Community</Link>
        </nav>
        {/* nft topbar button */}
        <div className="nft-topbar-btns">
          <button>Contact</button>
          <button>My account</button>
        </div>
      </div>
      <Product />
      <NFTGrid />
    </section>
  );
};

export default Detail;
