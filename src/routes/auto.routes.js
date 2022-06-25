const express = require('express')
const {controllers} = require('../controllers')
const AutoRouter = express.Router()

AutoRouter.post('/', controllers.ApiAutoController.insertarAuto)
AutoRouter.get('/', controllers.ApiAutoController.readAuto)

module.exports = AutoRouter