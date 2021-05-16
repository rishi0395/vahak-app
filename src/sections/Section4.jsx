import React, { useEffect, useState } from 'react';
// import Form from '../components/Form';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateHeading } from '../reducer';
import { useHistory } from 'react-router-dom';
import JourneyDetails from './JourneyDetails';
import BidDetails from './BidDetails';
import './section.css';
import EditIcon from '@material-ui/icons/Edit';

import { Formik, Form } from 'formik';
import FormikControl from '../components/FormikControl';

const Section4 = () => {
  const history = useHistory();

  const [otp, setOtp] = useState('');

  const state = useSelector((state) => state);
  const { mobileNumber } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateHeading('Place your Bid(3/4 step)'));

    return () => {
      setOtp('');
    };
  }, []);

  useEffect(() => {
    if (otp.length > 6) {
      history.push('section-5');
    }
  }, [otp]);

  const initialValues = {
    otp
  };

  const validationSchema = Yup.object({
    otp: Yup.string()
      .max(15, 'Must be 15 character or less')
      .required('selectLocation Required')
  });

  return (
    <div className='section-4'>
      <JourneyDetails />
      <BidDetails />
      <div>
        <span className='section-4_span'>
          <span>
            We've sent an OTP to your mobile number, Please enter it below to
            submit your bid <h1>{mobileNumber}</h1>
          </span>
          <span onClick={() => history.push('/section-3')}>
            <EditIcon /> Edit
          </span>
        </span>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(e) => e}
        >
          {(formik) => {
            Object.keys(formik.values).length && setOtp(formik.values.otp);
            return (
              <Form>
                <FormikControl
                  control='input'
                  type='text'
                  label='Enter OTP'
                  name='otp'
                />

                <button type='submit' disabled={!formik.isValid}>
                  Verify via OTP
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Section4;
