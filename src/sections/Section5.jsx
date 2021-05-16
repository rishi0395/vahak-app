import React, { useEffect } from 'react';
import JourneyDetails from './JourneyDetails';
import BidDetails from './BidDetails';
import './section.css';
import { useDispatch } from 'react-redux';
import { updateHeading } from '../reducer';
import Button from '../components/Button';

const Section5 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateHeading('Place your Bid(4/4 step)'));
    /** eslint-disable-next-line react-hooks/exhaustive-deps  */
  }, []);

  return (
    <div className='section-5'>
      <JourneyDetails />
      <BidDetails />
      <Button type='submit'>Submit Bid</Button>
    </div>
  );
};

export default Section5;
