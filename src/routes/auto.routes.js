const express = require('express')
const {controllers} = require('../controllers')
const upload= require('../middlewares/uploadimg')
const AutoRouter = express.Router()


const { verifyToken } = require('../middlewares')

AutoRouter.post('/',upload.single('imagen'), controllers.ApiAutoController.insertarAuto)
AutoRouter.get('/',verifyToken.verifyToken, controllers.ApiAutoController.readAuto)
AutoRouter.get('/findById/:id',controllers.ApiAutoController.readAutoByID)

AutoRouter.get('/:id', verifyToken.verifyToken, controllers.ApiAutoController.readAutoUser)
AutoRouter.delete('/:id', controllers.ApiAutoController.deleteAuto)
AutoRouter.get('/status/:id', controllers.ApiAutoController.statusAuto)

module.exports = AutoRouter