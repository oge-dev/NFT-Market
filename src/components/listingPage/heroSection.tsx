import React from "react";
// import nftText from "../../assets/Text.png";

const HeroSection = () => {
  return (
    <div className="h-screen bg-hero-pattern flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white">Welcome to NTF Listings</h1>
    </div>
    //     <section className="nft-header-section">

//       <div className="nftText">
//         <Image
//           src={nftText}
//           width={837}
//           height={351}
//           priority={false}
//           alt="nftTextImg"
//         />
//       </div>
//       <div className="search-select">
//         <div className="search-select-content">
//           <input
//             type="search"
//             className="search"
//             placeholder="Items, collections and creators"
//             aria-label="Search"
//           />
//           <select className="" aria-label="Filter options">
//             <option value="">Categories</option>
//             <option value="products">Products</option>
//             <option value="brands">Brands</option>
//           </select>
//         </div>
//       </div>
//     </section>
  );
};

export default HeroSection;
