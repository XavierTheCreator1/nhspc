const express = require("express");
const helmet = require("helmet");
const path = require("path");

const port = 5000;

const app = express();

app.use(express.static("./public"), helmet());

app.get("/api/setUsername", (req, res) => {
  res.send(`tagId is set to ${res.query.key}`);
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}..`);
});
