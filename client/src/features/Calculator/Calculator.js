import React, {useState} from 'react';
import './Calculator.css';
import Button from '../../components/Button/Button';
import Display from '../../components/Display/Display';

const Calculator = () => {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState(0);

  const addToEquation = (value) => {
    setEquation((equation) => [...equation, value]);
  };

  const clear = () => {
    setResult((result) => result = 0);
    setEquation((equation) => equation = '');
  };

  const calculate = () => {
    const input = equation.join('').replace(/×/g, '*');
    const result = Function('return ' + input)();
    setResult(result);
  };

  return (
    <div className='wrapper'>
      <Display result={result} equation={equation}/>
      <div className='row'>
        <Button text='C' handleClick={clear}/>
        <Button text='MR'/>
        <Button text='M+'/>
        <Button text='/' handleClick={addToEquation}/>
      </div>
      <div className='row'>
        <Button text='7' handleClick={addToEquation}/>
        <Button text='8' handleClick={addToEquation}/>
        <Button text='9' handleClick={addToEquation}/>
        <Button text='×' handleClick={addToEquation}/>
      </div>
      <div className='row'>
        <Button text='4' handleClick={addToEquation}/>
        <Button text='5' handleClick={addToEquation}/>
        <Button text='6' handleClick={addToEquation}/>
        <Button text='-' handleClick={addToEquation}/>
      </div>
      <div className='row'>
        <Button text='1' handleClick={addToEquation}/>
        <Button text='2' handleClick={addToEquation}/>
        <Button text='3' handleClick={addToEquation}/>
        <Button text='+' handleClick={addToEquation}/>
      </div>
      <div className='row'>
        <Button text='0' handleClick={addToEquation}/>
        <Button text='.' handleClick={addToEquation}/>
        <Button text='=' handleClick={calculate}/>
      </div>
    </div>
  );
};

export default Calculator;
