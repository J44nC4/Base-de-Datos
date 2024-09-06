//un controlador q manejará el modelo
//crea un nuevo objeto a traves del modelo existente y lo guarda en la base de datos
 
const contactsFormsModel = require('../models/contactsForms.model');
const ContactFormObject =require('../models/contactsForms.model')

const ContactFormController = {
    guardarContacto: async function(req, res) {
        const contactFormParaGuardar = new contactsFormsModel(req.body)
        await contactFormParaGuardar.save()
        res.status(200).json(contactFormParaGuardar)
    },
    listarContactos: async function(req, res) {
        //en una linea , regreso la informacion de todos los contact form que en  la la DB
        res.status(200).json(await contactsFormsModel.find())
    }
}

module.exports= ContactFormController