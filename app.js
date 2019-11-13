// pacakages
const express = require("express");

const bodyParser = require("body-parser");

// starting express app
const app = express();

// setting view engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let list = ["Code and watch anime", "Slackline tonight"];

// ROUTES
// GET home
app.get("/home", function(req, res) {
  res.render("home.ejs", { list: list }); //create an object called list and pass the array into it
});

//
app.post("/ninja", function(req, res) {
  console.log(req.body.taskItem);
  list.push(req.body.taskItem);
  res.render("home.ejs", { list: list });
  console.log(req);
});

//create a server to handle delete request
app.delete("/delete/:index", function(req, res) {
  console.log(req.params.index);

  list.splice(req.params.index, 1);

  res.json(list);
});

// server listening for request
app.listen(3000, function() {
  console.log("API up and running");
});
