//Core Modules
const path = require("path");

//External Module
const express = require("express");
const hostRouter = express.Router();

//Local Module
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", { pageTitle: "Add Home to AirBnB" });
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(
    "Home Registration Successful for:",
    req.body,
    req.body.houseName
  );
  registeredHomes.push({ houseName: req.body.houseName });
  res.render("homeAdded", { pageTitle: "Home Added Successfully" });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
