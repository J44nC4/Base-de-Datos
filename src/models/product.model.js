const mongoose = require('mongoose');
const Schema = mongoose.Schema

//crear un nuevo modelo
const Product = new Schema({
    ref: String,
    price: Number,
    decription: String,
    isAvailable: Boolean,
})

module.exports= mongoose.model('products', Product);