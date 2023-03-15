const mongoose = require('mongoose');

  // Derive a Schema

  const PizzaSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    quantity: Number,
  });

  //  Compile Schema to Model

  const PizzaStore = mongoose.model("PizzaStore", PizzaSchema, "pizzalist");

  module.exports = PizzaStore;