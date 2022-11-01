const express = require("express");
const path = require("path");

// Create an instance of an Express server
const app = express();

// Path to `public` folder
const folder = path.join(__dirname, "public");

// Serve static content from `public` folder
app.use(express.static(folder, { extensions: ["html"] }));

module.exports = app;
