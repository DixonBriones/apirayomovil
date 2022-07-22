const {response}= require('express')
const { AlquilerModel } = require('../models')

const alquiler = async (req, res) =>{
    const { ...body } = req.body
    const data = new AlquilerModel(body)
    const datos = await data.save()
    res.json(datos)
}

module.exports = {
    alquiler
}