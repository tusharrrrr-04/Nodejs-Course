//Core Modules
const path = require("path");

//External Module
const express = require("express");
const userRouter = express.Router();

//Local Module
const rootDir = require("../utils/pathUtil");

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
  // res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = userRouter;
