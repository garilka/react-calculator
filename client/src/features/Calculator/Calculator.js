import React from 'react';
import './Calculator.css';
import Button from '../../components/Button/Button';
import Display from '../../components/Display/Display';
import useCalculator from '../../hooks/useCalculator/useCalculator';

const Calculator = () => {
  const {addToEquation, calculate, clear, deleteLast, handleGet, handlePut,
    equation, result} = useCalculator();

  return (
    <div className='wrapper'>
      <Display result={result} equation={equation}/>
      <div className='row'>
        <Button text='AC' handleClick={clear}/>
        <Button text='DEL' handleClick={deleteLast}/>
        <Button text='MR'handleClick={handleGet}/>
        <Button text='M+'handleClick={handlePut}/>
      </div>
      <div className='row'>
        <Button text='7' handleClick={addToEquation}/>
        <Button text='8' handleClick={addToEquation}/>
        <Button text='9' handleClick={addToEquation}/>
        <Button text='/' handleClick={addToEquation}/>
      </div>
      <div className='row'>
        <Button text='4' handleClick={addToEquation}/>
        <Button text='5' handleClick={addToEquation}/>
        <Button text='6' handleClick={addToEquation}/>
        <Button text='×' handleClick={addToEquation}/>
      </div>
      <div className='row'>
        <Button text='1' handleClick={addToEquation}/>
        <Button text='2' handleClick={addToEquation}/>
        <Button text='3' handleClick={addToEquation}/>
        <Button text='-' handleClick={addToEquation}/>
      </div>
      <div className='row'>
        <Button text='0' handleClick={addToEquation}/>
        <Button text='.' handleClick={addToEquation}/>
        <Button text='=' handleClick={calculate}/>
        <Button text='+' handleClick={addToEquation}/>
      </div>
    </div>
  );
};

export default Calculator;
