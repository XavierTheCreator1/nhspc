const express = require("express");
const helmet = require("helmet");
const path = require("path");
require("dotenv").config();

const port = 5000;

const app = express();

app.use(express.static("./public"), helmet());

app.get("/api/setUsername", (req, res) => {
  if (req.query.apikey === process.env.apikey) {
    res.status(200).send("Accepted :)");
  } else {
    res.status(403).send("Forbidden >:(");
  }
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}..`);
});
