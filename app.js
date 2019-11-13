const express = require("express");
const bodyParser = require("body-parser");

//start express app
const app = express();

// view engine
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// middeware
app.use(express.static("./public"));

let list = [];

//routs

app.get("/home", function(req, res) {
  res.render("main.ejs", { list: list });
});

app.post("/ninja", function(req, res) {
  console.log(req.body.taskItem);
  list.push(req.body.taskItem);
  res.render("main.ejs", { list: list });
});

app.delete("/delete/:index", function(req, res) {
  console.log(req.params.index);

  list.splice(req.params.index, 1);

  res.json(list);
});

//list.shift(req.body.taskItem);
//list.removeChild(list.childNodes[0]);

app.listen(3004, function() {
  console.log("my server is running now");
});
