const memoryService = () => {
  const isMemoryValueValid = (value) => {
    if (typeof value !== 'number') {
      return false;
    }
    if (value.toString().length > 10) {
      return false;
    }
    if (/([0-9]+\.[0-9]+e\+[0-9]+)/.test(value)) {
      return true;
    }
    return true;
  };
  return {isMemoryValueValid};
};

export default memoryService;
