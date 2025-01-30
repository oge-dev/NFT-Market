// importation of compontents
import React from "react";
import Image from "next/image";
import Link from "next/link";
import nftLogo from "../../assets/Logo.png";
import nftText from "../../assets/Text.png";
import RitterSport from "../../assets/RitterSport.png";
import Nike from "../../assets/Nike.png";
import Addidas from "../../assets/addidas.png";
import NewHolland from "../../assets/NewHolland.png";

// header component at listing page
const Header = () => {
  return (
    // nft Header section
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
      <div className="nftText">
        <Image
          src={nftText}
          width={837}
          height={351}
          priority={false}
          alt="nftTextImg"
        />
      </div>
      <div className="search">search</div>
      <div className="brands">
        <Image
          src={RitterSport}
          width={85}
          height={45}
          priority={false}
          alt="nftTextImg"
        />
         <Image
          src={Nike}
          width={85}
          height={45}
          priority={false}
          alt="nftTextImg"
        />
         <Image
          src={Addidas}
          width={85}
          height={45}
          priority={false}
          alt="nftTextImg"
        />
         <Image
          src={NewHolland}
          width={85}
          height={45}
          priority={false}
          alt="nftTextImg"
        />
      </div>
    </section>
  );
};

export default Header;
