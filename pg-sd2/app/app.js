const express = require("express");
const path = require("path");
const db = require("./services/db");
const usersModel = require("./services/users");
const listingsModel = require("./services/listings");
const categoriesModel = require("./services/categories");

const app = express();

app.use(express.static(path.join(__dirname, "..", "static")));

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.get("/db_test", async function (req, res) {
  try {
    const rows = await db.query("SELECT 1 AS ok");
    res.json(rows[0]);
  } catch (err) {
    console.error("DB connection failed:", err);
    res.status(500).json({ error: "DB connection failed" });
  }
});

app.get("/users_test", async function (req, res) {
  try {
    const rows = await usersModel.getAllUsers();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Users query failed");
  }
});

app.get("/listings_test", async function (req, res) {
  try {
    const rows = await listingsModel.getAllListings();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Listings query failed");
  }
});

app.get("/categories_test", async function (req, res) {
  try {
    const rows = await categoriesModel.getAllCategories();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Categories query failed");
  }
});

app.get("/goodbye", function (req, res) {
  res.send("Goodbye world!");
});

app.get('/users', async function (req, res) {
  try {
    const users = await usersModel.getAllUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading users');
  }
});

app.get("/hello/:name", function (req, res) {
  res.send("Hello " + req.params.name);
});
app.get('/users', async function (req, res) {
  try {
    const users = await usersModel.getAllUsers();
    res.render('users', { users: users });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading users');
  }
});
app.get('/users/:id', async function (req, res) {
  try {
    const user = await usersModel.getUserById(req.params.id);
    res.render('user', { user: user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading user');
  }
});
module.exports = app;