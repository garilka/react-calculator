const calculatorValidation = () => {
  const isEquationValid = (arr, value) => {
    if (arr.length > 19) {
      return false;
    }
    if (arr.length === 0 && /([/|+|.|×])/.test(value)) {
      return false;
    }
    if (arr[arr.length - 2] === '×' && arr[arr.length - 1] === '×' &&
      /([/|×|\-|+|.])/.test(value)) {
      return false;
    }
    if (arr[arr.length - 1] === '×' && /([/|\-|+|.])/.test(value)) {
      return false;
    }
    if (/([/|\-|+|.])/.test(arr[arr.length - 1]) &&
      /([/|\-|+|.|×])/.test(value)) {
      return false;
    }
    if (value === '.') {
      const lastNumber = arr.join('').split(/[/|\-|+]/).pop();
      return !lastNumber.includes('.') ? true : false;
    }
    if (value === '0' && arr.length > 0) {
      const lastNumber = arr.join('').split(/[/|\-|+]/).pop();
      return lastNumber === '0' &&
      !lastNumber.includes('.') ?
       false : true;
    }
    if (/([1-9])/.test(value) && arr.length > 0) {
      const lastNumber = arr.join('').split(/[/|\-|+]/).pop();
      return lastNumber.charAt(0) === '0' && !lastNumber.includes('.') ?
       false : true;
    }
    return true;
  };

  const isCalculateValid = (arr) => {
    if (arr.length === 0) {
      return false;
    }
    if (/([/|\-|+|.|×])/.test(arr[arr.length - 1])) {
      return false;
    }
    return true;
  };

  const isMemoryReadValid = (arr) => {
    if (arr.length > 19) {
      return false;
    }
    return true;
  };

  return {isEquationValid, isCalculateValid, isMemoryReadValid};
};

export default calculatorValidation;
