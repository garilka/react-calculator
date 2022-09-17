import fs from 'fs';
import path from 'path';

const filepath = path.resolve(
    'G:/projects/calculator/server/src/memory', 'memory.txt');


const get = async (req, res) => {
  fs.promises.readFile(filepath, 'utf8')
      .then((memory) => {
        res.status(200).json({memory});
      });
};

const put = (req, res) => {
  const memoryValue = req.body.memoryState === '' ? req.body.result : '';
  fs.promises.writeFile(filepath, memoryValue.toString(), 'utf8')
      .then(() => {
        const message = req.body.memoryState === '' ?
        `M+ ${req.body.result}` : 'M clear';
        console.log(message);
        res.status(200).json({message: message});
      });
};

export default {
  get,
  put,
};
