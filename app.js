const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/crappy_images");
app.use(express.static('public'));  //allows you to serve static files (app.css)
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.redirect("/images");
});

//INDEX
app.get("/images", function(req, res) {
    res.render("index");
});

//NEW
// app.get("/images/new", function(req, res) {

// })


app.listen(3000, function() {
    console.log("Crappy Image Server Is Running!")
})