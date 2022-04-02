import * as env from 'dotenv';
import { getStage } from './helper/environment';

export function loadEnv(): void {
  env.config({ path: `./env/.env.${getStage()}` });
}
