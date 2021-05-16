import React from 'react';
import { useSelector } from 'react-redux';

const BidDetails = () => {
  const state = useSelector((state) => state);
  const { inr, mobileNumber, name } = state;

  return (
    <div className='bidDetails'>
      <span>
        <span className='spanTitle'>BID DETAILS</span>
        <h5>{`+91-${mobileNumber}`}</h5>
        <h5>{name}</h5>
        <h5>Call me Immediately to finalize</h5>
      </span>
      <div>
        <h1>&#x20b9;{` ${inr}`}</h1>
        <span>FIXED PRICE</span>
      </div>
    </div>
  );
};

export default BidDetails;
