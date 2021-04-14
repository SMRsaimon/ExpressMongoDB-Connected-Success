const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json())
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.736kg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });




client.connect(err => {
  const collection = client.db(`${process.env.DB_NAME}`).collection("UserBookingAppoinment");
  console.log("dataBase Connected ")

});







module.exports = app