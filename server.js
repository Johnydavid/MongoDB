const express = require("express");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3005;

app.listen(port, ()=>{
  console.log(`server running on port: ${port}`);
})


const mongoose = require("mongoose");
// uri ==> Universal Resource Identifer
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {});

// mongoose saves the connection in mongoose.connection
// To know whether mongoDb connected to nodejs
const db = mongoose.connection;

// db.once("open", () => {
//   console.log("Connection Successful");
// });

// db.on("error", () => {
//   console.log("Connection Failed");
// });


// Define a Schema
const ProductSchema = mongoose.Schema({
   
  name :  String,
  price :  Number,
  quantity :  Number
})

// Compile Schema to Model
                          //  Model Name, Schema Name,  Collection name 
const Product = mongoose.model('Product', ProductSchema, 'productList');



// Document instance
// const prod = new Product ({

// name : 'Books',
// price : 500,
// quantity: 100
// })

// prod.save(function(err, product){
// if(err) return console.error(err);
// console.log(product.name + " saved to productList collections");

// })


// Inserting multiple items 


// const prods = [{
//   name : "Wall Poster",
//   price : 200,
//   quantity : 50
// },
// {
//   name : "Books",
//   price : 100,
//   quantity : 50
// },
// {
//   name : "Stickers",
//   price : 50,
//   quantity : 150
// },
// {
//   name : "Pens",
//   price : 20,
//   quantity : 250
// }
// ]

// Product.collection.insert(prods, (err, docs)=>{
//   if(err){
//     return connsole.log(err);
//   }
//   else{
//     console.log("Multiple items inserted");
//   }
// })

// Product.collection.insertOne({
//   name : "Scale",
//   price : 50,
//   quantity : 100
// })

Product.collection.insertMany([{
  name : "Markers",
  price : 20,
  quantity : 120
},
{
name : "Geometry Box",
  price : 100,
  quantity : 50
},
{
name : "Labels",
  price : 10,
  quantity : 200
}])

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
