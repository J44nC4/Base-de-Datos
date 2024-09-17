const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//crear un nuevo modelo
const Product = new Schema({
    cebollaLarga:String,
    lechugaCrespa:String,
    Mix:String,
    Repollo:String,
    Lulo:String,
    Scotch:String,
    Rojo:String
})

module.exports= mongoose.model('products', Product);