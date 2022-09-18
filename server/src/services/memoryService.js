import fs from 'fs';

const memoryService = () => {
  const readMemory = async (filePath, encoding) => {
    return await fs.promises.readFile(filePath, encoding);
  };

  const writeMemory = async (filePath, content, encoding) => {
    fs.promises.writeFile(filePath, content, encoding);
  };

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
  return {readMemory, writeMemory, isMemoryValueValid};
};

export default memoryService;
