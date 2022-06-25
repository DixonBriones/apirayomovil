const express = require('express')
const {controllers} = require('../controllers')
const AutoRouter = express.Router()

AutoRouter.post('/', controllers.ApiAutoController.insertarAuto)

module.exports = AutoRouter