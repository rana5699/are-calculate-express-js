const express = require("express");
const app = express();
const port = 300;
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// home route
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/home.html");
});

// circle route
app.get("/circle", (req, res) => {
  res.status(200).sendFile(__dirname + "/circle.html");
});

// triangle route
app.get("/triangle", (req, res) => {
  res.status(200).sendFile(__dirname + "/triangle.html");
});

// circle post method
app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const result = Math.PI * radius * radius;
  res.status(200).send(`<h2>Circle Result is : ${result}</h2>`);
});

// triangle post method
app.post("/triangle", (req, res) => {
  const base = req.body.base;
  const height = req.body.height;
  const result = 0.5 * base * height;
  res.status(200).send(`<h2>Trianle Result is : ${result}</h2>`);
});

// error route
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/error.html");
});

// /server run
app.listen(port, () => {
  console.log(`Server run at this http://localhost:${port}`);
});
