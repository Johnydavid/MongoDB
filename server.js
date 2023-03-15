const express = require("express");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

const port = Number(process.env.PORT) || 3001;

// URI --> Universal Resource Identifier

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connection Successful");


});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
