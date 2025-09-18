import { Pool, PoolConfig } from "pg";
import 'dotenv/config';

let dbConfig: PoolConfig;
// Should default to using local DB if env var is undefined.
const useLocalDb = process.env.USE_LOCAL_DB ?? true;
if (useLocalDb) {
  dbConfig = {
    user: process.env.POSTGRES_USER ?? "admin",
    host: process.env.POSTGRES_HOST ?? "localhost",
    database: process.env.POSTGRES_DB ?? "hyperfixation",
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT) ?? 5432,
  };
} else {
  // If USE_LOCAL_DB is false, we require SUPABASE_URL to be defined, so that 
  // we may connect to the cloud-hosted database. If none is given,
  // we cannot provide a sensible default for this so we throw an error.
  const connectionString = process.env.SUPABASE_URL;
  if (!connectionString) {
    throw new Error('No supabase connection URL found.');
  }
  dbConfig = {
    connectionString,
  }
}

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
