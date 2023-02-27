const express = require("express");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;


const mongoose = require("mongoose");
// uri ==> Universal Resource Identifer
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {});

// mongoose saves the connection in mongoose.connection
// To know whether mongoDb connected to nodejs
const db = mongoose.connection;

db.once("open", () => {
  console.log("Connection Successful");
});

db.on("error", () => {
  console.log("Connection Failed");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
