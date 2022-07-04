const {response}= require('express')
const { AutoModel } = require('../models')


const insertarAuto = async (req, res = response) => {
    const{...body}=req.body;
    console.log(body);
    const autos = new AutoModel(body);
    const nuevoAuto= await autos.save();
    res.json(nuevoAuto);
  }

const readAuto = async (req, res) => {
    const data = await AutoModel.find()
    res.status(200).json(data)
}

const readAutoByID = async (req, res) => {
  const{id}=req.params;
  const datos = await AutoModel.findById(id).populate({ path: 'usuario', select: 'username -_id' })
  const {username, ...rest }=datos.usuario
  const data = datos.toObject();
  delete data["usuario"];
  delete data["__v"]
  data.usuario=username
  res.status(200).json(data)
}

  module.exports={insertarAuto,readAuto,readAutoByID};