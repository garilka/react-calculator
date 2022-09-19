import React from 'react';
import './Calculator.css';
import Button from '../../components/Button/Button';
import Display from '../../components/Display/Display';
import useCalculator from '../../hooks/useCalculator/useCalculator';

const Calculator = () => {
  const {addToEquation, calculate, clear, deleteLast, handleGet, handlePut,
    memoryState, equation, result} = useCalculator();

  return (
    <div className='wrapper'>
      <Display
        memoryState={memoryState}
        result={result}
        equation={equation}
      />
      <div className='button-wrapper'>
        <div className='row'>
          <Button text='AC' handleClick={clear} height='2em'
            color='#FFCEAD'/>
          <Button text='DEL' handleClick={deleteLast} height='2em'
            color='#FFCEAD'/>
          <Button text='MR'handleClick={handleGet} height='2em'
            color='#FFCEAD'/>
          <Button text='M'handleClick={handlePut} height='2em'
            color='#FFCEAD'/>
        </div>
        <div className='row'>
          <Button text='7' handleClick={addToEquation}/>
          <Button text='8' handleClick={addToEquation}/>
          <Button text='9' handleClick={addToEquation}/>
          <Button text='/' handleClick={addToEquation} color='#FF8670'/>
        </div>
        <div className='row'>
          <Button text='4' handleClick={addToEquation}/>
          <Button text='5' handleClick={addToEquation}/>
          <Button text='6' handleClick={addToEquation}/>
          <Button text='×' handleClick={addToEquation} color='#FF8670'/>
        </div>
        <div className='row'>
          <Button text='1' handleClick={addToEquation}/>
          <Button text='2' handleClick={addToEquation}/>
          <Button text='3' handleClick={addToEquation}/>
          <Button text='-' handleClick={addToEquation} color='#FF8670'
            fontSize='2.3vw'/>
        </div>
        <div className='row'>
          <Button text='0' handleClick={addToEquation}/>
          <Button text='.' handleClick={addToEquation}/>
          <Button text='=' handleClick={calculate}/>
          <Button text='+' handleClick={addToEquation} color='#FF8670'/>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
