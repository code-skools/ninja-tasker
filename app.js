const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.render("main.ejs");
});

app.listen(3004, function() {
  console.log("my server is running better");
});
