const express = require('express')
const {controllers} = require('../controllers')
const AutoRouter = express.Router()

const { verifyToken } = require('../middlewares')

AutoRouter.post('/', controllers.ApiAutoController.insertarAuto)
AutoRouter.get('/', controllers.ApiAutoController.readAuto)
//AutoRouter.get('/findById/:id',controllers.ApiAutoController.readAutoByID)

AutoRouter.get('/:id', verifyToken.verifyToken, controllers.ApiAutoController.readAutoUser)
AutoRouter.delete('/:id', controllers.ApiAutoController.deleteAuto)

module.exports = AutoRouter