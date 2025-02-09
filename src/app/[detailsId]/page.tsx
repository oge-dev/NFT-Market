import React from "react";
// import "@/styles/details.css";
import Product from "@/components/detail/Product";
import NFTGrid from "@/components/detail/NftGrid";

const Details = () => {
  return (
    <section className="nft-details">
      <Product />
      <NFTGrid />
    </section>
  );
};

export default Details;
