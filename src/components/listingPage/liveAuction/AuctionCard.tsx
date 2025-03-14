import Image from "next/image";
import { StaticImageData } from "next/image";
import TimerIcon from "../../../assets/TimerIcon.png";
import HeartIcon from "../../../assets/heartIcon.png";

interface AuctionCardProps {
  id: number;
  image: StaticImageData;
  title: string;
  price: string;
  timeLeft: string;
  bidders: StaticImageData[];
  biddersNum: number;
  likes: number;
}

const AuctionCard: React.FC<AuctionCardProps> = ({
  id,
  image,
  title,
  price,
  timeLeft,
  bidders,
  biddersNum,
  likes,
}) => {
  return (
    <div className="rounded-xl border border-on-white-dark-90 p-4">
      <Image
        src={image}
        alt={title}
        className="w-full h-82 object-cover rounded-lg"
      />
      <div className="flex justify-between items-center my-6">
        <h6 className="text-rest-white text-custom-20 font-custom-600 mt-3">
          {title}
        </h6>
        <button className="text-primary-purple-light-100 text-custom-16 tracking-[0.2px] bg-primary-purple-light-100/15 inline-flex items-center justify-end gap-2.5 rounded px-3.5 py-2">
          {price} ETH
        </button>
      </div>

      <div className="flex items-center">
        <Image
          src={TimerIcon}
          alt="Timer Icon"
          width={20}
          height={20}
          className="mr-2"
        />
        <p className="text-rest-white font-inter font-custom-400 text-custom-14 leading-[150%] tracking-[0.2px]">
          {timeLeft} min left
        </p>
      </div>
      <div className="w-full h-[1px] bg-[#262840] mt-7 mb-5"></div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {bidders.slice(0, 4).map((bidder, index) => (
            <Image
              key={`${id}-${index}`}
              src={bidder}
              alt="Bidder Avatar"
              width={32}
              height={32}
              className="rounded-full border border-gray-600 -ml-2"
            />
          ))}
          <div className="text-on-white-grey-100 font-inter font-custom-400 text-custom-14 leading-[150%] tracking-[0.2px] ml-3">
            {biddersNum} people are bidding
          </div>
        </div>

        <div className="flex items-center">
          <Image src={HeartIcon} alt="Heart Icon" width={20} height={20} />
          <span className="text-on-white-grey-100 font-inter font-custom-400 text-custom-14 leading-[150%] tracking-[0.2px]">
            {likes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
