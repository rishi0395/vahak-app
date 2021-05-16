import React, { useEffect } from 'react';
// import Form from '../components/Form';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { onSubmitSection3, updateHeading } from '../reducer';
import { useHistory } from 'react-router-dom';
import JourneyDetails from './JourneyDetails';
import './section.css';

import { Formik, Form } from 'formik';
import FormikControl from '../components/FormikControl';

const Section3 = () => {
  const history = useHistory();
  const state = useSelector((state) => state);
  const { inr, mobileNumber, name, remarks } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateHeading('Place your Bid(2/4 step)'));
  }, []);

  const initialValues = {
    mobileNumber,
    name,
    remarks
  };

  const validationSchema = Yup.object({
    mobileNumber: Yup.number().required('mobile number Required'),
    name: Yup.string()
      .max(15, 'Must be 15 character or less')
      .required('name Required'),
    remarks: Yup.string()
  });

  return (
    <div className='section-3'>
      <JourneyDetails />
      <h1> &#x20b9;{` ${inr}`}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(e) => {
          dispatch(onSubmitSection3(e));
          history.push('section-4');
        }}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control='input'
                type='text'
                label='Enter your 10 digits Mobile Number'
                name='mobileNumber'
              />
              <FormikControl
                control='input'
                type='text'
                label='Enter your Name'
                name='name'
              />
              <FormikControl
                control='input'
                type='text'
                label='Enter Remarks (optional)'
                name='remarks'
              />

              <button type='submit' disabled={!formik.isValid}>
                Verify via OTP
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Section3;
