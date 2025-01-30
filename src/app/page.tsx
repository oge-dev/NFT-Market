import Header from '@/components/listingPage/Header';
import LiveAuction from '@/components/listingPage/liveAuction';
import Logotypes from '@/components/listingPage/logotypes';
import React from 'react';

const ListingPage = () => {
  return (
    <div className="listing-page">
      <Header />
      {/* logo types brands */}
      <Logotypes/>
      {/* Live Auction */}
      <LiveAuction/>
    </div>
  );
};

export default ListingPage;
