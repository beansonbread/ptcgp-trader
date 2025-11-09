import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: process.env.DB_USER,
});

export async function query(text, params) {
    const result = await pool.query(text, params);
    return result;
} 