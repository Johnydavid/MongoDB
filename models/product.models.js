const mongoose = require ('mongoose');

// Define a Schema

const ProductSchema = mongoose.Schema({
    name : {type: String},
    price : {type: Number},
    quantity : {type : Number}
})


// Compile schema to model

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;