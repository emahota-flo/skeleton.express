import express from 'express';
import { loadEnv } from './config';
loadEnv();

import { getEnv } from './helper/environment';
import { initRoutes } from './routes/router';

const app = express();

app.use(express.json());
initRoutes(app);

const port = parseInt(getEnv('SERVER_PORT'), 10);
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
