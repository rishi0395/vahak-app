import React from 'react';
import './components.css';

const Button = ({ onClick, children, ...props }) => {
  return (
    <button className='button' onClick={onClick} {...props} type='button'>
      {children}
    </button>
  );
};

export default Button;
