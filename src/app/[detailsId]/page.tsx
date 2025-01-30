import React from "react";
import "@/styles/details.css";
import NFTGrid from "@/components/detail/NftGrid";
import Product from "@/components/detail/Product";

const Detail = () => {
  return <section className="nft-details ">
    <h1 className="bg-red">Hetllooe</h1>
     <NFTGrid/>
     <Product/>
    </section>;
};

export default Detail;
