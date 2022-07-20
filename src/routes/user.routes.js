const routerUser = require('express').Router()
const { controllers } = require('../controllers')
const { verifyToken } = require('../middlewares')

routerUser.post('/register', controllers.ApiUserController.register)
routerUser.post('/login', controllers.ApiUserController.login)

routerUser.get('/', controllers.ApiUserController.readUser)
routerUser.put('/:id', controllers.ApiUserController.updateUser)
routerUser.delete('/:id', controllers.ApiUserController.deleteAccount)

module.exports =  routerUser