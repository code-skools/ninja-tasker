const express = require("express");
const db = require("../models");
const routes = express.Router(); //defines how routes behave

// ROUTES
// GET home
routes.get("/home", function(req, res) {
  db.Tasks.findAll({
    attributes: ["id", "todo"]
  }).then(function(results) {
    console.log(results);
    res.render("home.ejs", { list: results });
  });
});

//
routes.post("/ninja", function(req, res) {
  console.log(req.body.taskItem);
  db.Tasks.create({
    todo: req.body.taskItem
  }).then(function(results) {
    console.log(results);
    res.redirect("/home");
  });
});

//create a server to handle delete request
routes.delete("/delete/:index", function(req, res) {
  db.Tasks.destroy({ where: { id: req.params.index } }).then(function(results) {
    res.redirect("/home");
  });

  res.json(list);
});
module.exports = routes;
