const db = require("./db");

async function getAllListings() {
  return await db.query("SELECT * FROM listings");
}

async function getListingById(id) {
  const rows = await db.query("SELECT * FROM listings WHERE id = ?", [id]);
  return rows[0];
}

async function getListingsByUserId(userId) {
  return await db.query("SELECT * FROM listings WHERE user_id = ?", [userId]);
}

module.exports = {
  getAllListings,
  getListingById,
  getListingsByUserId,
};