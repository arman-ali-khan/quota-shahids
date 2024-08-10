import { pool } from "@/lib/db";


export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id, name, email } = req.body;

  if (!id || !name || !email) {
    return res.status(400).json({ message: 'ID, name, and email are required' });
  }

  try {
    const [result] = await pool.query(
      'UPDATE users SET name = ?, email = ? WHERE id = ?',
      [name, email, id]
    );
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Database Error', error: error.message });
  }
}
