// src/pages/api/contact.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      const newContact = await prisma.contact.create({
        data: {
          name,
          email,
          message,
        },
      });

      return res.status(201).json(newContact);
    } catch (error) {
      return res.status(500).json({ error: 'Error creating contact' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
