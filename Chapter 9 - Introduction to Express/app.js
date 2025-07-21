//External Module
const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("First middleware", req.url, req.method);
  // res.send("<p>Came from First Middleware</p>");
  next();
});

app.post("/submit-details", (req, res, next) => {
  console.log("Second middleware", req.url, req.method);
  res.send("<p>Welcome to Complete Coding Nodejs series</p>");
});

app.use("/", (req, res, next) => {
  console.log("Another middleware", req.url, req.method);
  res.send("<p>Came from another Middleware</p>");
  next();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
