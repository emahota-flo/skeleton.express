import * as fs from 'fs';
import { getStage } from './environment';

/* eslint-disable @typescript-eslint/no-var-requires */
const simpleLogger = require('simple-node-logger');

const exists = fs.existsSync(`./logs`);
if (!exists) {
  fs.mkdirSync(`./logs`);
}

export const log =
  getStage() === 'local'
    ? simpleLogger.createSimpleLogger()
    : simpleLogger.createRollingFileLogger({
        logDirectory: './logs',
        fileNamePattern: 'log-<DATE>.log',
        dateFormat: 'YYYY.MM.DD',
      });
