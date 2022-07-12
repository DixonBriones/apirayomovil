const express = require('express')
const {controllers} = require('../controllers')
const AutoRouter = express.Router()

AutoRouter.post('/', controllers.ApiAutoController.insertarAuto)
AutoRouter.get('/', controllers.ApiAutoController.readAuto)
AutoRouter.get('/findById/:id',controllers.ApiAutoController.readAutoByID)

AutoRouter.delete('/findById/:id',controllers.ApiAutoController.deleteAuto)

module.exports = AutoRouter