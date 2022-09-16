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

  const handleGet = () => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/memory/read', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
    }).then( async (res) => {
      if (res.status === 200) {
        setResult((await res.json()).memory);
      } else if (res.status === 500) {
        throw new Error('Interal server error');
      }
    }).catch((err) => {
      throw new Error(err.message);
    });
  };

  const handlePut = () => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/memory/write', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({result: result}),
    }).then((res) => {
      if (res.status === 200) {
        console.log(`${result} succesfully saved in memory`);
      } else if (res.status === 500) {
        throw new Error('Interal server error');
      }
    }).catch((err) => {
      throw new Error(err.message);
    });
  };

  return {addToEquation, calculate, clear, handleGet, handlePut,
    equation, result};
};

export default useCalculator;
