import React from 'react';
import './Button.css';

const Button = ({text, handleClick}) => {
  return (
    <div className='button' onClick={() => handleClick(text)}>
      {text}
    </div>);
};

export default Button;
