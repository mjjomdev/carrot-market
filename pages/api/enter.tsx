import withHandler from '@/libs/server/withHandler';
import {NextApiRequest, NextApiResponse} from 'next';
// import client from '../../../libs/client';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  res.status(200).end();
}

export default withHandler('POST', handler);
