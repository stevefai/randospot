const express = require("express");
const path = require("path");

const app = express();

const publicDir = path.join(__dirname, "public");

const port = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("Welcome to RandoSpot!");
});

app.listen(port);
