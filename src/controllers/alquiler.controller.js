const {response}= require('express')
const { AlquilerModel,AutoModel } = require('../models')

const alquiler = async (req, res) =>{
    const { ...body } = req.body
    await AutoModel.findByIdAndUpdate(body.auto,{status:false})
    const data = new AlquilerModel(body)
    const datos = await data.save()
    res.json(data)
}

const busquedaalquilerID = async (req, res) =>{
    const id= req.userId
    const datos = await AlquilerModel.find({usuario: id}).populate({path: 'auto',populate : { path : 'usuario'}})
    datos.forEach((dato,index)=>{
        const data = dato.toObject();
        const {telefono, ...rest }=dato.auto.usuario
        const {marca,modelo,foto, ...rest2 }=dato.auto
        delete data["usuario"];
        delete data["auto"];
        delete data["__v"]
        data.telefono=telefono
        data.marca=marca
        data.modelo=modelo
        data.foto=foto
        datos[index]=data
    })
    res.status(200).json(datos)
}

module.exports = {
    alquiler,
    busquedaalquilerID
}