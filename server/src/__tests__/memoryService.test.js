// import {jest} from '@jest/globals';
import memoryService from '../services/memoryService';

const {isMemoryValueValid} = memoryService();

describe('isMemoryValueValid() from memoryService', () => {
  it('returns true on type of number', () => {
    const valueToSave = 2;
    expect(() => isMemoryValueValid(valueToSave).toBe(true));
  });
  it('returns false on type of not number', () => {
    const valueToSave = '2';
    expect(() => isMemoryValueValid(valueToSave).toBe(false));
  });
  it('returns false is the length of result greater than 10', () => {
    const valueToSave = 20302.20302;
    expect(() => isMemoryValueValid(valueToSave).toBe(false));
  });
  it('returns true on exponential form', () => {
    const valueToSave = 2.4580e+70;
    expect(() => isMemoryValueValid(valueToSave).toBe(true));
  });
});
