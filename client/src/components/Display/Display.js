import React from 'react';
import './Display.css';

const Display = ({result, equation}) => {
  return (
    <div className='display'>
      <div className='result'>{result}</div>
      <div className='equation'>{equation}</div>
    </div>
  );
};

export default Display;
