var axios = require("axios");
var cheerio = require("cheerio");
var bodyParser = require("body-parser");
var express = require("express");
var exphbs = require("express-handlebars");
var mongojs = require("mongojs");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;

var app = express();var db = mongojs("Lupe_database", ['Lupe_collection']);
app.use(express.json());

// db
var db = mongojs("Lupe_database", ['Lupe_collection']);
//for the section that says test, idk what db is supposed to go there.
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/test'
mongoose.connect(MONGODB_URI);


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/html/get", function(req, res) {
    // 1. MongoCall
    // 2. Return HTML
    db.Lupe_collection.find(function (err, docs) {
        res.render("index", {
            mongoData: docs
        });
        console.log(docs);
    });
});

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  })