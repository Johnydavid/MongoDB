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
  console.log(product.name + "saved to productList collections");
  
})




db.on("error", () => {
  console.log("Connection Failed");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
