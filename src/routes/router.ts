import * as core from 'express-serve-static-core';
import { audioBooksRoute } from '@components/audiobooks/route';

export function initRoutes(app: core.Express): void {
  app.use('/API/audiobooks', audioBooksRoute);
}
