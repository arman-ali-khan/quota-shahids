import { pool } from "@/lib/db";


export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'ID is required' });
  }

  try {
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Database Error', error: error.message });
  }
}
