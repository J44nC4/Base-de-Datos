const Router = require('express').Router(); //solo trae el modulo "router" del express
const Product = require("../models/product.model");

//crearemos una funcion asincrona
Router.post('/', async function(req,res){
    try{
        const product = new Product(req.body);
        await product.save();
        res.status(200).json("Creado");


    }catch{
        res.status(500).json("Nope");
    }
});

Router.get("/",async function (req,res){
    try{
        const products =await Product.find();
        res.status(200).json(products);

    }catch (err) {
        res.status(500).json(err);
    }
})

module.exports = Router;
