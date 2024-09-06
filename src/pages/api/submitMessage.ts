import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      await sql`
        INSERT INTO names (name, email, message)
        VALUES (${name}, ${email}, ${message})
      `;
      res.status(200).json({ message: 'Message successfully sent!' });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ message: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
