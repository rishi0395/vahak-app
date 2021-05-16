import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { onSubmitSection1, updateHeading } from '../reducer';
import './section.css';
import FormikControl from '../components/FormikControl';

const Section1 = () => {
  const history = useHistory();
  const [selectCarType, setSelectCarType] = useState('SUV');
  const state = useSelector((state) => state);

  const { selectLocation, destination, enterCarType, numberOfTravellers } =
    state;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateHeading('Place your Bid(1/4 step)'));
  }, []);

  const selectOptions = [
    { key: 'Select your car', value: '' },
    { value: 'HatchBack', key: 'Hatch Back' },
    { value: 'Sedan', key: 'Sedan' },
    { value: 'SUV', key: 'SUV' }
  ];

  const validationSchema = Yup.object({
    selectLocation: Yup.string().required('Location is Required'),
    destination: Yup.string().required('Destination is Required'),
    enterCarType: Yup.string().required('Required'),
    numberOfTravellers: Yup.number()
      .max(selectCarType === 'SUV' ? 6 : 4)
      .required(`Max value is ${selectCarType === 'SUV' ? 6 : 4}`)
  });

  const initialValues = {
    selectLocation,
    destination,
    enterCarType,
    numberOfTravellers
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(e) => {
        dispatch(onSubmitSection1(e));
        history.push('section-2');
      }}
    >
      {(formik) => {
        setSelectCarType(formik.values.enterCarType);
        return (
          <Form className='formik'>
            <FormikControl
              control='input'
              type='text'
              label='Source Location'
              name='selectLocation'
            />
            <FormikControl
              control='input'
              type='text'
              label='Destination'
              name='destination'
            />
            <FormikControl
              control='select'
              label='Enter Car Type'
              name='enterCarType'
              options={selectOptions}
            />
            <FormikControl
              control='input'
              type='text'
              label='Number of Travellers'
              name='numberOfTravellers'
            />
            <button type='submit' disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Section1;
