import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const pool = mysql.createPool({
  host: "db4free.net",
  user: "bhoot_top",
  password: "@Samrat123",
  database: "bhoot_top",
});

export { pool };

