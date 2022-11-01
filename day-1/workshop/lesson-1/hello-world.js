const express = require("express");

// The port we want our server to listen for incoming request on
const PORT = 3000;

// Create an instance of an Express server
const app = express();

// Add a GET handler on the / route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start listening for requests
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
