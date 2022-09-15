import {useState} from 'react';

const useCalculator = () => {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState(0);

  const addToEquation = (value) => {
    setEquation((equation) => [...equation, value]);
  };

  const calculate = () => {
    const input = equation.join('').replace(/×/g, '*');
    const result = Function('return ' + input)();
    setResult(result);
  };

  const clear = () => {
    setResult((result) => result = 0);
    setEquation((equation) => equation = '');
  };

  return {addToEquation, calculate, clear, equation, result};
};

export default useCalculator;
