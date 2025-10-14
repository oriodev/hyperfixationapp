import { pool } from "../lib/db";
import { QueryResult } from "pg";

/**
 * Get entire user record corresponding with a given user id.
 * @param {string} id 
 * @returns {Promise<QueryResult>}
 */
export const getUser = async (id: string) => {
  // TODO: ADD RETURN TYPE BACK IN, REMOVED FOR TESTING
  const queryText = "SELECT * FROM users WHERE id=$1";
  const values = [parseInt(id)];

  try {
    const user = await pool.query(queryText, values);
    if (user.rowCount === 0) throw new Error(`No user found with ID ${id}`);
    
    // This destructures the wider object to return only the user
    return user.rows[0];

  } catch (error) {
    console.error('Getting user from id:', error);
    throw error;
  }
};

/**
 * Get entire user record corresponding with given a email address.
 * @param {string} email 
 * @returns {Promise<QueryResult>}
 */
export const getUserByEmail = async (email: string): Promise<QueryResult> => {
  const queryText = "SELECT * FROM users WHERE email=$1";
  const values = [email];
  try {
    const user = await pool.query(queryText, values);
    return user;
  } catch (error) {
    console.error('Getting user from email:', error);
    throw error;
  }
};

/**
 * Get user ID corresponding with a given email address.
 * @param {string} email 
 * @returns {Promise<string>}
 */
export const getUserId = async (email: string): Promise<string> => {
  const queryText = "SELECT id FROM users WHERE email=$1";
  const values = [email];
  try {
    const result = await pool.query(queryText, values);
    const id: number = result.rows[0].id;
    return id.toString();
  } catch (error) {
    console.error('Getting user ID from email:', error);
    throw error;
  }

}

/**
 * Writes new user record to users table in database.
 * @param {string} username 
 * @param {string} email 
 * @param {string} hashedPassword 
 */
export async function writeUser(
  username: string,
  email: string,
  hashedPassword: string
): Promise<void> {
  const insertUserText =
    "INSERT INTO users (username, email, hashed_password, created, last_logged_in) VALUES($1, $2, $3, CURRENT_TIMESTAMP(2), CURRENT_TIMESTAMP(2)) RETURNING id";
  const values = [username, email, hashedPassword];
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query(insertUserText, values);
    await client.query("COMMIT");
  } catch (error) {
    console.error("Writing user to database:", error);
    throw error;
  } finally {
    client.release();
  }
}


