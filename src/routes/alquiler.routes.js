const ruta = require('express').Router()
const { controllers } = require('../controllers')


ruta.post('/insertaralquiler', controllers.ApiAlquilerController.alquiler)

module.exports = ruta