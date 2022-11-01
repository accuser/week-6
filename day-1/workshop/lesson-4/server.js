const app = require("./app");

/**
 * The port to listen for incoming request on (defaults to 3000).
 *
 * @example
 * $ PORT=3000 node index.js
 */
const PORT = process.env["PORT"] ?? 3000;

// Start listening for incoming requests
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
