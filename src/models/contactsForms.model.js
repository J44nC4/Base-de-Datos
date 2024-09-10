//servidor que va a recibir informacion
const mongoose = require('mongoose')
const contactSchema= mongoose.Schema

const ContactForm = new contactSchema({
    nombre:String,
    apellidos:String,
    telefono:Number,
    email:String,
    //mensaje:String,
    dia:String,
    hora:String
})

module.exports = mongoose.model('contactsForms', ContactForm);