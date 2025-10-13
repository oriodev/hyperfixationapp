import { pool } from "@/lib/db";
import { compare, hash } from "bcrypt"

export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
}

export const comparePasswords = async (password: string, hashedPassword: string): Promise<boolean> => {
  const match = await compare(password, hashedPassword);
  return match;
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