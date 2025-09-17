import { Pool } from "pg";
import 'dotenv/config';

const dbConfig = {
  user: process.env.POSTGRES_USER ?? "admin",
  host: process.env.DB_HOST ?? "localhost",
  database: process.env.POSTGRES_DB ?? "hyperfixation",
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT) ?? 5432,
};

export const pool = new Pool(dbConfig);

async function verifyConnection(): Promise<void> {
  try {
    const client = await pool.connect();
    console.log('Successfully connected to database.');
    client.release();
  } catch (error) {
    console.error('Connecting to database:', error);
    throw error;
  }
}

// Verify database connection as soon as the module is loaded.
verifyConnection();
