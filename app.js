const express = require("express"),
    app = express();
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/crappy_images");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.redirect("/images");
});

app.get("/images", function(req, res) {
    res.send("IT worked!");
});


app.listen(3000, function() {
    console.log("Crappy Image Is Running!")
})