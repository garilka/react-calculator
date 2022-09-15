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
  fs.promises.writeFile(filepath, req.body.result.toString(), 'utf8')
      .then(() => {
        res.status(200).json({
          message: `${req.body.result} succesfully saved in memory`});
      });
};

export default {
  get,
  put,
};
