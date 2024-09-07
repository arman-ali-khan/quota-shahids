import { pool } from "@/lib/db";


export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const [rows] = await pool.query('SELECT * FROM shahids');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Database Error', error: error.message });
  }
}
