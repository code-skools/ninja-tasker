//packages
const express = require("express");
const bodyParser = require("body-parser");

//starting express app
const app = express();

//setting up view engine
app.set("view engine", "ejs");

//middleware
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));

let list = ["Code and watch anime", "Slackline tonight"];

//routes
//get home
app.get("/home", function(req, res) {
  res.render("home.ejs", { list: list });
});

// POST
app.post("/ninja", function(req, res) {
  console.log(req.body.taskItem);
  list.push(req.body.taskItem);
  res.render("home.ejs", { list: list });
});

//server listening for request
app.listen(3000, function() {
  console.log("sever is liT!!!!!");
});
