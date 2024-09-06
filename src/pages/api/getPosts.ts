import type { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const likes = parseInt(req.query.likes as string, 10) || 0;

    try {
      const { rows } = await sql`SELECT * FROM names WHERE likes > ${likes};`;
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch posts.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
