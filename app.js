const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/index.js"); // same ("./models")
const routes = require("./routes");

//start express app
const app = express();

// view engine
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// middeware
app.use(express.static("./public"));

//routing manager
app.use(routes);

db.sequelize.sync().then(function() {
  app.listen(3004, function(err) {
    if (err) console.log(err);
    console.log("my server is running now");
  });
});
