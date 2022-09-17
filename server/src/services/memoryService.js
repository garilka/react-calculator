const memoryService = () => {
  const isMemoryValueValid = (value) => {
    if (typeof value !== 'number') {
      return false;
    }
    if (value.toString().length > 10) {
      return false;
    };
    return true;
  };
  return {isMemoryValueValid};
};

export default memoryService;
