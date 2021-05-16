import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, useHistory } from 'react-router-dom';
import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Section3 from '../sections/Section3';
import Section4 from '../sections/Section4';
import Section5 from '../sections/Section5';
import './vahak.css';

const Vahak = () => {
  const state = useSelector((state) => state);
  const history = useHistory();

  return (
    <div className='container'>
      <span onClick={() => history.push('/')} className='logo'>
        Vahak
      </span>
      <div className='title'>{state.heading}</div>
      <Switch>
        <Section1 path='/' exact />
        <Section2 path='/section-2' exact />
        <Section3 path='/section-3' exact />
        <Section4 path='/section-4' exact />
        <Section5 path='/section-5' exact />
      </Switch>
    </div>
  );
};

export default Vahak;
