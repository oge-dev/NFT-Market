import Header from '@/components/listingPage/Header';
import Logotypes from '@/components/listingPage/logotypes';
import React from 'react';

const ListingPage = () => {
  return (
    <div className="listing-page">
      <Header />
      {/* logo types brands */}
      <Logotypes/>
    </div>
  );
};

export default ListingPage;
