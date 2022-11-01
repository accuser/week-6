const express = require("express");
const path = require("path");

// Create an instance of an Express server
const app = express();

let name = "World";

// Get a greeting
app.get("/", (req, res) => {
  res.send(`Hello, ${name}!`);
});

// Set a name
app.post("/:name", (req, res) => {
  name = req.params.name;

  res.setHeader("location", "/");
  res.sendStatus(302);
});

module.exports = app;
