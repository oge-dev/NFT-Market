import React from 'react';
import LiveAuction from '@/components/listingPage/liveAuction';
// import Logotypes from '@/components/listingPage/logotypes';
import HeroSection from '@/components/listingPage/heroSection';


const ListingPage = () => {
  return (
    <div className="listing-page">
      <HeroSection/>
      {/* logo types brands */}
      {/* <Logotypes/> */}
      {/* Live Auction */}
      <LiveAuction/>
    </div>
  );
};

export default ListingPage;
