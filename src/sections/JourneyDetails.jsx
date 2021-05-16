import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import './section.css';

const JourneyDetails = () => {
  const history = useHistory();
  const state = useSelector((state) => state);
  const { selectLocation, destination, enterCarType, numberOfTravellers } =
    state;

  return (
    <div className='journeyDetails'>
      <div>
        <span className='spanTitle'>journey Details</span>
        <h4>
          {selectLocation}- {destination}
        </h4>
        <h4 className='h4Ele'>{`${numberOfTravellers} Persons, ${enterCarType}`}</h4>
      </div>
      <span onClick={() => history.push('/')}>
        <EditIcon /> Edit
      </span>
    </div>
  );
};

export default JourneyDetails;
