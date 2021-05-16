import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { onSubmitSection2, updateHeading } from '../reducer';
import { useHistory } from 'react-router-dom';
import JourneyDetails from './JourneyDetails';
import './section.css';

import { Formik, Form } from 'formik';
import FormikControl from '../components/FormikControl';

const Section2 = () => {
  const history = useHistory();
  const state = useSelector((state) => state);
  const { inr } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateHeading('Place your Bid(2/4 step)'));
  }, []);

  const initialValues = {
    inr
  };

  const checkboxOptions = [{ key: 'Rate Negotiable', value: 'rateNegotiable' }];

  const validationSchema = Yup.object({
    inr: Yup.string()
      .max(15, 'Must be 15 character or less')
      .required('selectLocation Required')
  });

  return (
    <div className='section-2'>
      <JourneyDetails />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(e) => {
          console.log(e);
          dispatch(onSubmitSection2(e));
          history.push('section-3');
        }}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl control='input' type='text' label='₹' name='inr' />

              <FormikControl
                control='checkbox'
                name='rateNegiotable'
                options={checkboxOptions}
              />

              <button type='submit' disabled={!formik.isValid}>
                Next
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Section2;
