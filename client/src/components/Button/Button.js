import React from 'react';
import './Button.css';

const Button = ({text, handleClick, height}) => {
  return (
    <div
      className='button'
      onClick={() => handleClick(text)}
      style={{height: height}}
    >
      {text}
    </div>);
};

export default Button;
