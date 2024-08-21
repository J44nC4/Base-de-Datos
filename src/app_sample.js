const express= require('express');
const mongoose = require('mongoose');
const app= express();
//importar rutas
const ProductRoutes = require('./routes/product.routes')
const salesRoutes= require('./routes/sale.routes')
require("dotenv").config();

//conectarnos a mongoose
mongoose.connect(process.env.DB_URL)
.then(db => console.log("Connected"))
.catch(err => console.log(err))


/* app.get('/', function(req,res){
    res.send("hello world")
}); */

//Configurar rutas
app.use('/products',ProductRoutes);
app.use('/sales', salesRoutes);

app.listen(3000, ()=>{
    console.log()
}); /* el puerto mas usado para node.js es el 3000 */

