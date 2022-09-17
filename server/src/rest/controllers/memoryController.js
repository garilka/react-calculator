import fs from 'fs';
import path from 'path';
import memoryService from '../../services/memoryService.js';

const {isMemoryValueValid} = memoryService();

const filepath = path.resolve(
    'G:/projects/calculator/server/src/memory', 'memory.txt');


const get = (req, res) => {
  try {
    fs.promises.readFile(filepath, 'utf8')
        .then((memory) => {
          res.status(200).json({memory: memory});
        });
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

const put = (req, res) => {
  try {
    const memoryValue = req.body.memoryState === '' ? req.body.result : '';
    if (isMemoryValueValid(req.body.result)) {
      fs.promises.writeFile(filepath, memoryValue.toString(), 'utf8')
          .then(() => {
            const message = req.body.memoryState === '' ?
            `M+ ${req.body.result}` : 'M clear';
            res.status(200).json({message: message});
          });
    } else {
      res.status(406).json({message: 'Invalid value'});
    }
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

export default {
  get,
  put,
};
