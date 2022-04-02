import express from 'express';
import { loadEnv } from './config';
loadEnv();

import { getEnv } from './helper/environment';

const app = express();

app.use(express.json());
app.use('/API/test', express.Router());

const port = parseInt(getEnv('SERVER_PORT'), 10);
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
