import React from "react";
import Image from "next/image";
import Link from "next/link";
import nftLogo from "../assets/Logo.png";

const Header = () => {
  return (
    // nft Header component
    <section className="nft-header-section">
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
    </section>
  );
};

export default Header;
