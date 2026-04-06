const db = require("./db");

async function getAllUsers() {
  return await db.query("SELECT * FROM users");
}

async function getUserById(id) {
  const rows = await db.query("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
}

module.exports = {
  getAllUsers,
  getUserById,
};