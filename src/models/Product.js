const { Schema, model } = require("mongoose");

const Product = new Schema({
  name: {
    type: String,
  },
  description: String,
  price: {
    type: Number,
    default: 0,
  },
  categories: [String],
});

module.exports = model("Product", Product);
