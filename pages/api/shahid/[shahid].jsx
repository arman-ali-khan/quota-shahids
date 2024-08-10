import { pool } from '@/lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { shahid } = req.query;

  if (!shahid) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const [rows] = await pool.query('SELECT * FROM shahids WHERE id = ?', [shahid]);
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Database Error', error: error.message });
  }
}
