const express = require('express');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000

app.use(express.json());

const mongoose = require('mongoose');

// url Universal Resource Identifier
const url = process.env.ATLAS.URL;
mongoose.connect(url, {});

const db - mongoose.connection;

db.once('open', ()=>{
    console.log('connection successful')
});
db.on('error', ()=>{
    console.log('connection failed');
});

