const db = require("./db");

async function getAllListings() {
  return await db.query("SELECT * FROM listings");
}

async function getListingById(id) {
  const rows = await db.query("SELECT * FROM listings WHERE id = ?", [id]);
  return rows[0];
}

module.exports = {
  getAllListings,
  getListingById,
};