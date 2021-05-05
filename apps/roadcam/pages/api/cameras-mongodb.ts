import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../util/mongodb';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();

  try {
    let cameras = await db.collection('cameras').find({}).toArray();
    cameras = cameras[0];
    res.json(cameras);
  } catch {
    res.status(500).end();
  }
}
