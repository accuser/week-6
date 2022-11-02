const express = require("express");

// Create an instance of an Express server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ expand: false }));

let name = null;

// Get a greeting
app.get("/", (req, res) => {
  res.send(`Hello, ${name ?? "World"}!`);
});

// Set a name
app.post("/", (req, res) => {
  name = req.body["name"];

  res.setHeader("location", "/");
  res.sendStatus(302); // Found
});

app.delete("/", (req, res) => {
  name = null;

  res.sendStatus(204); // No Content
});

module.exports = app;
