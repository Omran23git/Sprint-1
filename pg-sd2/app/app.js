const express = require("express");

var app = express();

app.use(express.static("static"));

const db = require('./services/db');
const listingsModel = require('./services/listings');

app.get("/", function(req, res) {
    res.send("Hello world!");
});

app.get("/db_test", function(req, res) {
    sql = 'select * from test_table';
    db.query(sql).then(results => {
        console.log(results);
        res.send(results);
    });
});

app.get("/goodbye", function(req, res) {
    res.send("Goodbye world!");
});

app.get("/hello/:name", function(req, res) {
    console.log(req.params);
    res.send("Hello " + req.params.name);
});

app.get('/listings/:id', async function (req, res) {
    try {
        const listing = await listingsModel.getListingById(req.params.id);
        res.render('listing', { listing: listing });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error loading listing');
    }
});

app.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000/');
});