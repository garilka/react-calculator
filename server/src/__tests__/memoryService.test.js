import {jest} from '@jest/globals';
import fs from 'fs';
import {vol} from 'memfs';
import memoryService from '../services/memoryService';

const {readMemory, writeMemory, isMemoryValueValid} = memoryService();

jest.mock('fs.promises');

describe('readFile() from MemoryService', () => {
  beforeEach(() => {
    vol.reset();
  });
  it('should return string that\'s saved in the file', async () => {
    const filePath = '/file.txt';
    await fs.promises.writeFile(filePath, '20302');
    const result = await readMemory(filePath, 'utf8');
    expect(result).toBe('20302');
  });
});

describe('writeFile() from MemoryService', () => {
  beforeEach(() => {
    vol.reset();
  });
  it('should save string into file', async () => {
    const filePath = '/file.txt';
    await writeMemory(filePath, '20302', 'utf8');
    const result = await fs.promises.readFile(filePath, 'utf8');
    expect(result).toBe('20302');
  });
});

describe('isMemoryValueValid() from memoryService', () => {
  it('should return true on type of number', () => {
    const valueToSave = 2;
    expect(isMemoryValueValid(valueToSave)).toBe(true);
  });
  it('should return false on type of not number', () => {
    const valueToSave = 'a';
    expect(isMemoryValueValid(valueToSave)).toBe(false);
  });
  it('should return false if the length of result greater than 10', () => {
    const valueToSave = 20302.20302;
    expect(isMemoryValueValid(valueToSave)).toBe(false);
  });
  it('should return true if the length of result smaller than 11', () => {
    const valueToSave = 20302.2030;
    expect(isMemoryValueValid(valueToSave)).toBe(true);
  });
  it('should return true on exponential number format', () => {
    const valueToSave = 2.4580e+70;
    expect(isMemoryValueValid(valueToSave)).toBe(true);
  });
});

