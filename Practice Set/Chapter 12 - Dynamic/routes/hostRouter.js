//Core Modules
const path = require("path");

//External Module
const express = require("express");
const hostRouter = express.Router();

//Local Module
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Add Home to AirBnB",
    currentPage: "addHome",
  });
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home Registration Successful for:", req.body);
  registeredHomes.push(req.body);
  res.render("homeAdded", {
    pageTitle: "Home Added Successfully",
    currentPage: "homeAdded",
  });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
