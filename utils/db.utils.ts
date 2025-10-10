import { pool } from "../lib/db";
import { QueryResult } from "pg";

/**
 * Get entire user record corresponding with given a email address.
 * @param {string} email 
 * @returns {Promise<QueryResult>}
 */
export const getUser = async (email: string): Promise<QueryResult> => {
  const queryText = "SELECT * FROM users WHERE email=$1";
  const values = [email];
  let user;
  try {
    user = await pool.query(queryText, values);
  } catch (error) {
    console.error('Getting user from email:', error);
    throw error;
  }
  return user;
};

/**
 * Get user ID corresponding with a given email address.
 * @param {string} email 
 * @returns {Promise<string>}
 */
export const getUserId = async (email: string): Promise<string> => {
  const queryText = "SELECT id FROM users WHERE email=$1";
  const values = [email];
  let result;
  try {
    result = await pool.query(queryText, values);
  } catch (error) {
    console.error('Getting user ID from email:', error);
    throw error;
  }
  const id: number = result.rows[0].id;
  return id.toString();
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

/**
 * Checks if user exists in database. Returns true if user is found with
 * the provided email. If no email provided, an error is thrown.
 *
 * @param {string} email
 * @returns {Promise<boolean>}
 */
export async function emailExists(
  email: string | undefined
): Promise<boolean> {
  let userExists = false;
  let queryText, values;
  try {
    if (email !== undefined) {
      queryText = "SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)";
      values = [email];
    } else {
      // If no email provided, throw an error.
      throw new Error("No email provided.");
    }
    const result = await pool.query(queryText, values);
    userExists = result.rows[0].exists;
  } catch (error) {
    console.error("Checking if user exists:", error);
    throw error;
  }
  return userExists;
}

/**
 * Checks if user exists in database. Returns true if user is found with
 * the provided username. If no username provided, an error is thrown.
 *
 * @param {string} username
 * @returns {Promise<boolean>}
 */
export async function usernameExists(
  username: string | undefined
): Promise<boolean> {
  let userExists = false;
  let queryText, values;
  try {
    if (username !== undefined) {
      queryText = "SELECT EXISTS(SELECT 1 FROM users WHERE username = $1)";
      values = [username];
    } else {
      // If no username provided, throw an error.
      throw new Error("No username provided.");
    }
    const result = await pool.query(queryText, values);
    userExists = result.rows[0].exists;
  } catch (error) {
    console.error("Checking if user exists:", error);
    throw error;
  }
  return userExists;
}
