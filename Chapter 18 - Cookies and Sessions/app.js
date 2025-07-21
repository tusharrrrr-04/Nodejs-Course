//Core Modules
const path = require("path");

//External Module
const express = require("express");

//Local Modules
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const { pageNotFound } = require("./controllers/errors");
const { default: mongoose } = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(pageNotFound);

const PORT = 3000;
const DB_URL = "mongodb+srv://root:root@completecoding.qtk7bwk.mongodb.net/airbnb?retryWrites=true&w=majority&appName=CompleteCoding"

mongoose.connect((DB_URL)).then(() => {
  console.log("Connected to MongoDB using Mongoose");
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log("Error connecting to MongoDB:", err);
})