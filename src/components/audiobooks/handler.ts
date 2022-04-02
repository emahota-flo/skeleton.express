import express from 'express';
import { log } from '../../helper/logger';
import { Audiobooks } from './audiobooks.interfaces';

export async function getAudioBooks(
  req: express.Request,
  res: express.Response,
): Promise<express.Response<Audiobooks[]>> {
  log.info('[getAudioBooks] req.body: ', req.body);

  try {
    return res.status(200).send([
      {
        id: '1',
        name: 'New',
        author: 'Anna',
      },
    ]);
  } catch (error: Error | any) {
    return res.status(error.status).send(error?.message || error);
  }
}
