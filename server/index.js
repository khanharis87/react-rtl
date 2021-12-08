const express = require("express");
const cors = require("cors");

const bundleApi = require("./bundle-api.json");

const app = express();

app.use(cors());

const port = 8000;
function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}

app.get("/", (req, res) => res.send(bundleApi));
const server = app.listen(port, listening);
