import path from 'path';
import memoryService from '../../services/memoryService.js';

const {readMemory, writeMemory, isMemoryValueValid} = memoryService();

const filepath = path.resolve(
    'G:/projects/calculator/server/src/memory', 'memory.txt');


const get = (req, res) => {
  try {
    readMemory(filepath, 'utf8')
        .then((memory) => {
          res.status(200).json({memory: memory});
        });
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

const put = (req, res) => {
  try {
    if (typeof req.body.memoryState !== 'undefined' &&
    typeof req.body.result !== 'undefined') {
      const memoryValue = req.body.memoryState === '' ? req.body.result : '';
      if (isMemoryValueValid(req.body.result)) {
        writeMemory(filepath, memoryValue.toString(), 'utf8')
            .then(() => {
              if (req.body.memoryState === '') {
                res.status(200).json({
                  message: `${req.body.result} saved in M`});
              } else if (req.body.memoryState === 'M') {
                res.status(200).json({message: 'M cleared'});
              } else {
                res.status(406).json({message: 'Invalid memoryState value'});
              }
            });
      }
      if (!isMemoryValueValid(req.body.result)) {
        res.status(406).json({message: 'Invalid value'});
      }
    } else {
      res.status(400).json({message: 'Wrong request body'});
    }
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

export default {
  get,
  put,
};
