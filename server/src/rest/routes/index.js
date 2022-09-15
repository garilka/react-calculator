import express from 'express';
import baseRouter from './baseRouter.js';
import memoryRouter from './memoryRouter.js';
const router = express.Router();

router.use('/', baseRouter);
router.use('/memory', memoryRouter);

export default router;
