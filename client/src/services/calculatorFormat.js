const calculatorFormat = () => {
  const formatResult = (value) => {
    if (value.toString().length > 10) {
      if (value > 9999999999 || value < -9999999999) {
        const expoForm = Number.parseFloat(value).toExponential(4);
        return expoForm;
      } else if (value % 1 !== 0) {
        const maxLength = 10;
        const intLength = value.toString().split('.')[0].length;
        const tens = 10 ** (maxLength - 1 - intLength);
        return Math.round(value * tens) / tens;
      } else {
        return value;
      }
    } else {
      return value;
    }
  };

  return {formatResult};
};
export default calculatorFormat;
