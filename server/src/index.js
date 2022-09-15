import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './rest/routes/index.js';
dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Back-end server started on port ${PORT}`);
});
