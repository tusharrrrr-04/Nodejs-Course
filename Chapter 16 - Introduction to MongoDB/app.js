//Core Modules
const path = require("path");

//External Module
const express = require("express");

//Local Modules
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const { pageNotFound } = require("./controllers/errors");
const { mongoConnect } = require("./utils/databaseUtil");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(pageNotFound);

const PORT = 3000;
mongoConnect(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
