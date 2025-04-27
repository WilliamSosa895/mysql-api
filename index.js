// index.js
require("dotenv").config();
const server = require("./server");
const PORT = process.env.PORT || 8080;

server.listen(PORT, "0.0.0.0", () =>
  console.log(`Server is live at http://0.0.0.0:${PORT}`)
);


/*require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
*/