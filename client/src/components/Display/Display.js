import React from 'react';
import './Display.css';

const Display = ({memoryState, result, equation}) => {
  return (
    <div className='display'>
      <div className='memoryState'>{memoryState}</div>
      <div className='result'>{result}</div>
      <div className='equation'>{equation}</div>
    </div>
  );
};

export default Display;
