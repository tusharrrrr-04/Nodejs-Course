//Core Modules
const path = require("path");

//External Module
const express = require("express");
const hostRouter = express.Router();

//Local Module
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
  // res.sendFile(path.join(__dirname, "../", "views", "homeAdded.html"));
});

module.exports = hostRouter;
