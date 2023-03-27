import {NextApiRequest, NextApiResponse} from 'next';
// import client from '../../../libs/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(401).end();
  }
  // req.body.blahblah 형태로 읽어오려면 headers설정해줘야함.
  console.log(req.body.email);
  res.status(200).end();
}
