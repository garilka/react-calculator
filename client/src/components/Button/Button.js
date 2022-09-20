import React from 'react';
import './Button.css';

const Button = ({text, handleClick, height, color, textColor, fontSize}) => {
  return (
    <div
      className='button'
      onClick={() => handleClick(text)}
      style={{
        height: height,
        backgroundColor: color,
        color: textColor,
        fontSize: fontSize,
      }}
    >
      {text}
    </div>);
};

export default Button;
