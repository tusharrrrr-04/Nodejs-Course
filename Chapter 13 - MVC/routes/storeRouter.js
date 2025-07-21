//External Module
const express = require("express");
const storeRouter = express.Router();

//Local Module
const {
  getHomes,
  getBookings,
  getIndex,
  getFavouriteList,
} = require("../controllers/storeController");

storeRouter.get("/", getIndex);
storeRouter.get("/homes", getHomes);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/favourites", getFavouriteList);

module.exports = storeRouter;
