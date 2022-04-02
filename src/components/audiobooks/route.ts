import express from 'express';
import { getAudioBooks } from './handler';

export const audioBooksRoute = express.Router();

audioBooksRoute.get('', getAudioBooks);
