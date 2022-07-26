const ruta = require('express').Router()
const { controllers } = require('../controllers')
const { verifyToken } = require('../middlewares')

ruta.post('/insertaralquiler', controllers.ApiAlquilerController.alquiler)
ruta.get('/findalquilerid',verifyToken.verifyToken, controllers.ApiAlquilerController.busquedaalquilerID)

module.exports = ruta