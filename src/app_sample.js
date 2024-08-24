const express= require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const app= express();

app.use(cors());

//importar rutas
const ProductRoutes = require('./routes/product.routes')
const salesRoutes= require('./routes/sale.routes')
require("dotenv").config();

//conectarnos a mongoose
mongoose
.connect(process.env.DB_URL)
.then(db => console.log("Connected"))
.catch(err => console.log(err))

//configuraciones
app.use(express.urlencoded({ extended: false }));

/* app.get('/', function(req,res){
    res.send("hello world")
}); */


//Configurar rutas
app.get("/",function (req,res){
    res.send("hello from vercel")
});

app.use('/products',ProductRoutes);
app.use('/sales', salesRoutes);

app.listen(3000, ()=>{
    console.log("Server Running");
}); /* el puerto mas usado para node.js es el 3000 */

