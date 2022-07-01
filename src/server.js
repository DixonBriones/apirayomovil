const express = require('express')
const {PORT}=require('./config');


class Servidor{
    constructor(){
        this.app = express()
        this.port = PORT

        require('./config/dbc').dbc()

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(express.json())
    }

    routes(){
        this.app.use('/api/v1/user', require('./routes/user.routes')),
        this.app.use('/api/v1/auto', require('./routes/auto.routes'))

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servicio funcionando correctamente en http://localhost:${this.port}`)
        })
    }
}

module.exports = Servidor;
