const express = require("express");
const db = require("../models");
const routes = express.Router();
const passport = require("../config/passport");
//defines how routes behave

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

// ROUTES: users

// GET login

routes.get("/user/login", function(req, res) {
  res.render("login.ejs");
});

// POST login
routes.post(
  "/user/login",
  passport.authenticate("local", {
    failureRedirect: "/user/login",
    successRedirect: "/home"
  })
);

// GET sign up
routes.get("/user/signup", function(req, res) {
  res.render("registration.ejs");
});

// POST sign up
routes.post(
  "/user/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/home",
    failureRedirect: "/user/signup"
  })
);

//create a server to handle delete request
routes.delete("/delete/:index", function(req, res) {
  db.Tasks.destroy({ where: { id: req.params.index } }).then(function(results) {
    res.redirect("/home");
  });

  res.json(list);
});

module.exports = routes;
