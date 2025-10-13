import { pool } from "@/lib/db";

/**
 * Gets all checkins for a user by user id
 * @param {string} id 
 * @returns {Promise<QueryResult>}
 */
export const getCheckins = async (id: string) => {
  // TODO: ADD RETURN TYPE
  const queryText = "SELECT * FROM checkins WHERE id=$1";
  const values = [parseInt(id)];

  try {
    const checkins = await pool.query(queryText, values);
    if (checkins.rowCount === 0) return [];
    
    // This destructures the wider object to return only the checkins
    return checkins.rows;

  } catch (error) {
    console.error('Getting fixation tags from id:', error);
    throw error;
  }
};