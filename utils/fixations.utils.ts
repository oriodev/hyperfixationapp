import { pool } from "@/lib/db";

/**
 * Gets all fixation tags for a user by user id
 * @param {string} id 
 * @returns {Promise<QueryResult>}
 */
export const getFixationTags = async (id: string) => {
  // TODO: ADD RETURN TYPE
  const queryText = "SELECT * FROM fixationtags WHERE id=$1";
  const values = [parseInt(id)];

  try {
    const fixationTags = await pool.query(queryText, values);
    if (fixationTags.rowCount === 0) return [];
    
    // This destructures the wider object to return only the tags
    return fixationTags.rows;

  } catch (error) {
    console.error('Getting fixation tags from id:', error);
    throw error;
  }
};

/**
 * Gets all fixation for a user by user id
 * @param {string} id 
 * @returns {Promise<QueryResult>}
 */
export const getFixations = async (id: string) => {
  // TODO: ADD RETURN TYPE
  const queryText = "SELECT * FROM fixations WHERE id=$1";
  const values = [parseInt(id)];

  try {
    const fixations = await pool.query(queryText, values);
    if (fixations.rowCount === 0) return [];
    
    // This destructures the wider object to return only the tags
    return fixations.rows;

  } catch (error) {
    console.error('Getting fixations from id:', error);
    throw error;
  }
};