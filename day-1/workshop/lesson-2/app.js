const express = require("express");

// Create an instance of an Express server
const app = express();

// Add a GET handler on the / route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports = app;
