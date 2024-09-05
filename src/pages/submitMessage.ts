// /pages/api/submitMessage.ts

import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Create a new message in the database
      await prisma.messages.create({
        data: {
          name,
          email,
          message,
        },
      });
      res.status(200).json({ success: true, message: 'Message successfully sent' });
    } catch (error) {
      console.error('Error saving message:', error);
      res.status(500).json({ success: false, error: 'Error saving message' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
