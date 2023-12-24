const express = require("express");
const helmet = require("helmet");
const path = require("path");

const app = express();

app.use(express.static("./public"), helmet());

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000..");
});
