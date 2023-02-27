const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 3000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {});

const db = mongoose.connection;

db.once('open', ()=>{
    console.log("Success!!!");
})
db.on('error', ()=>{
    console.log("Failed");
})


app.listen(port, ()=>{
    console.log(`server running on ${port}`)
})

