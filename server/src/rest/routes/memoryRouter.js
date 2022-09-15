import express from 'express';
import {memoryController} from '../controllers/index.js';
const memoryRouter = express.Router();

memoryRouter.get('/read', memoryController.get);
memoryRouter.put('/write', memoryController.put);

export default memoryRouter;
