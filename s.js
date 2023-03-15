const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');

const app = express();

const port = Number(process.env.PORT) || 3000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {});

const db = mongoose.connection;

db.once('open', ()=>{
    console.log("Success!!!");
})
db.on('error', ()=>{
    console.log("Failed");
})

const ProductSchema = mongoose.Schema({
   
    name :  String,
    price :  Number,
    quantity :  Number
})

const Product = mongoose.model('Product', ProductSchema, 'productList');
const prod = new Product ({
  
  name : 'Books',
  price : 500,
  quantity: 100
})

prod.save(function(err, product){
  if(err) return console.error(err);
  console.log(product.name + " saved to productList collections");
  
})



app.listen(port, ()=>{
    console.log(`server running on ${port}`)
})

