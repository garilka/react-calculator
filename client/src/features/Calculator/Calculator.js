import React from 'react';
import './Calculator.css';
import Button from '../../components/Button/Button';

const Calculator = () => {
  return (
    <div className='wrapper'>
      <div className='row'>
        <Button text='7'/>
        <Button text='8'/>
        <Button/>
        <Button/>
      </div>
      <div className='row'>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
      </div>
      <div className='row'>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
      </div>
      <div className='row'>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
      </div>
    </div>
  );
};

export default Calculator;
