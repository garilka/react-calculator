import React from 'react';
import './Calculator.css';
import Button from '../../components/Button/Button';
import Display from '../../components/Display/Display';

const Calculator = () => {
  return (
    <div className='wrapper'>
      <Display/>
      <div className='row'>
        <Button text='C'/>
        <Button text='MR'/>
        <Button text='M+'/>
        <Button text='/'/>
      </div>
      <div className='row'>
        <Button text='7'/>
        <Button text='8'/>
        <Button text='9'/>
        <Button text='×'/>
      </div>
      <div className='row'>
        <Button text='4'/>
        <Button text='5'/>
        <Button text='6'/>
        <Button text='-'/>
      </div>
      <div className='row'>
        <Button text='1'/>
        <Button text='2'/>
        <Button text='3'/>
        <Button text='+'/>
      </div>
      <div className='row'>
        <Button text='0'/>
        <Button text='.'/>
        <Button text='='/>
      </div>
    </div>
  );
};

export default Calculator;
