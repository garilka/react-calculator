const memoryService = () => {
  const isMemoryValueValid = (value) => {
    if (/([0-9]+\.[0-9]+e\+[0-9]+)/.test(value)) {
      return true;
    }
    if (typeof value !== 'number') {
      return false;
    }
    if (value.toString().length > 10) {
      return false;
    }
    return true;
  };
  return {isMemoryValueValid};
};

export default memoryService;
