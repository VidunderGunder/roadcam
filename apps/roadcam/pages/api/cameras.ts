import { NextApiRequest, NextApiResponse } from 'next';
import cameras from './cameras.json';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(cameras);
}
