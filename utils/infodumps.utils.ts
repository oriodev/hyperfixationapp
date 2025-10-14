import { pool } from "@/lib/db";

/**
 * Get pinned infodumps for user given a user id
 * @param {string} id 
 * @returns {Promise<QueryResult>}
 */
export const getPinnedInfodumps = async (id: string) => {
  // TODO: ADD RETURN TYPE
  const queryText = "SELECT * FROM infodumps WHERE id=$1 AND pinned";
  const values = [parseInt(id)];

  try {
    const pinnedInfodumps = await pool.query(queryText, values);
    if (pinnedInfodumps.rowCount === 0) return []
    
    // This destructures the wider object to return only the infodumps
    return pinnedInfodumps.rows;

  } catch (error) {
    console.error('Getting pinned infodumps from id:', error);
    throw error;
  }
};