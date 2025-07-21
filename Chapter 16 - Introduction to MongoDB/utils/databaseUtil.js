const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url =
  "mongodb+srv://root:root@completecoding.qtk7bwk.mongodb.net/?retryWrites=true&w=majority&appName=CompleteCoding";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then((client) => {
      _db = client.db("airbnb");
      callback();
    })
    .catch((err) => {
      console.log("Error while connecting to MongoDB: ", err);
    });
};

const getDB = () => {
  if (!_db) {
    throw new Error("Mongo not connected");
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
