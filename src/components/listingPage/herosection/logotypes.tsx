import React from "react";
import Image from "next/image";
import RitterSport from "../../../assets/RitterSport.png";
import Nike from "../../../assets/Nike.png";
import Addidas from "../../../assets/addidas.png";
import NewHolland from "../../../assets/NewHolland.png";

const Logotypes = () => {
  return (
    <div className="flex justify-center items-center mt-20 gap-[110px]">
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
  );
};

export default Logotypes;
