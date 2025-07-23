//Core Modules
const path = require("path");

//External Module
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const DB_URL =
  "mongodb+srv://root:root@completecoding.qtk7bwk.mongodb.net/airbnb?retryWrites=true&w=majority&appName=CompleteCoding";

//Local Modules
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const rootDir = require("./utils/pathUtil");
const { pageNotFound } = require("./controllers/errors");
const { default: mongoose } = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const store = new MongoDBStore({
  uri: DB_URL,
  collection: "sessions",
});

app.use(express.urlencoded());
app.use(
  session({
    secret: "Complete Coding Secret",
    resave: false,
    saveUninitialized: true,
    store,
  })
);

app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn;
  next();
});

app.use(authRouter);
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (!req.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
});
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(pageNotFound);

const PORT = 3000;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to MongoDB using Mongoose");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
