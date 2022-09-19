import React from 'react';
import './Button.css';

const Button = ({text, handleClick, height, color, fontSize}) => {
  return (
    <div
      className='button'
      onClick={() => handleClick(text)}
      style={{
        height: height,
        backgroundColor: color,
        fontSize: fontSize,
      }}
    >
      {text}
    </div>);
};

export default Button;
