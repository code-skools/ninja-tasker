const express = require("express");
const db = require("../models");
const routes = express.Router();
const passport = require("../config/passport");

//routs

routes.get("/home", function(req, res) {
  db.Tasks.findAll({
    attributes: ["id", "todo"]
  }).then(function(results) {
    // console.log(results);
    res.render("main.ejs", { list: results });
  });
});

routes.post("/ninja", function(req, res) {
  console.log(req.body.taskItem);
  db.Tasks.create({
    todo: req.body.taskItem
  }).then(function(results) {
    res.redirect("/home");
  });
});

routes.delete("/delete/:index", function(req, res) {
  console.log("here");
  console.log(req.params.index);
  db.Tasks.destroy({
    where: { id: req.params.index }
  }).then(function(results) {
    res.redirect("/home");
  });
  res.json(list);
});

//routes: user
//get login
routes.get("/user/login", function(req, res) {
  res.render("login.ejs");
});

//post login
routes.post(
  "/user/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/user/login"
  })
);

//sign up
routes.get("/user/signup", function(req, res) {
  res.render("registration.ejs");
});

//post sign up
routes.post(
  "/user/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/home",
    failureRedirect: "/user/login"
  })
);

module.exports = routes;
