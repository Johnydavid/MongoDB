const mongoose = require ('mongoose');

// Derive / Define a Schema

const ProductSchema = mongoose.Schema({
    id : Number,
    name :  String,
    price :  Number,
    quantity :  Number
})


// Compile schema to model
                                // Model Name, Schema Name, Collections

const Product = mongoose.model('Product', ProductSchema, 'productList');

// Document Instance

const prod = new Product ({
    id : 001,
    name : 'Books',
    price : 500,
    quantity: 100
})

prod.save(function(err, product){
    if(err) return console.error(err);
    console.log(product.name + "saved to productList collections");
    
})