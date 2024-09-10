//servidor que va a recibir informacion
const mongoose = require('mongoose')
const contactSchema= mongoose.Schema

const ContactForm = new contactSchema({
    nombre:String,
    email:String,
    telefono:Number,
    mensaje:String,
    hora:String,
    dia:String
})

module.exports = mongoose.model('contactsForms', ContactForm);