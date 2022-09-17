import {useState} from 'react';
import isValid from '../../services/calculatorValidation';

const useCalculator = () => {
  const [memoryState, setMemoryState] = useState('');
  const [equation, setEquation] = useState([]);
  const [result, setResult] = useState(0);

  const addToEquation = (value) => {
    if (isValid(equation, value)) {
      setEquation((equation) => [...equation, value]);
    }
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

  const deleteLast = () => {
    setEquation((equation) => equation.slice(0, -1));
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
        const valueArr = Array.from((await res.json()).memory);
        setEquation((equation) => [...equation, ...valueArr]);
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
      body: JSON.stringify({
        result: result,
        memoryState: memoryState,
      }),
    }).then( async (res) => {
      if (res.status === 200) {
        if (memoryState === '') {
          setMemoryState('M');
          console.log((await res.json()).message);
        } else {
          setMemoryState('');
          console.log((await res.json()).message);
        }
      } else if (res.status === 500) {
        throw new Error('Interal server error');
      }
    }).catch((err) => {
      throw new Error(err.message);
    });
  };

  return {addToEquation, calculate, clear, deleteLast, handleGet, handlePut,
    memoryState, equation, result};
};

export default useCalculator;
