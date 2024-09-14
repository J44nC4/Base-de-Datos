const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//crear un nuevo modelo
const Product = new Schema({
    nombre: String,
    precio: String,
    total: String,
    cebollaLarga:String,
    lechugaCrespa:String,
    Mix:String
})

module.exports= mongoose.model('products', Product);