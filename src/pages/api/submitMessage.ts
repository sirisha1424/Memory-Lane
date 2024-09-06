import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      await prisma.names.create({
        data: {
          name,
          email,
          message,
        },
      });

      res.status(200).json({ message: 'Message successfully sent!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send message.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
