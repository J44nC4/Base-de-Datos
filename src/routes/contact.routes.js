const miRouter= require('express').Router()
const ContactFormController = require('../controllers/contactsForms.controller')

miRouter.post('/guardar', ContactFormController.guardarContacto)
miRouter.get ("/listar", ContactFormController.listarContactos)

module.exports= miRouter;