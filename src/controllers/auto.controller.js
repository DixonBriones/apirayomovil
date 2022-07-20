const {response}= require('express')
const { AutoModel } = require('../models')
const cloudinary = require("../config/cloudinary");
const upload = require("../middlewares/uploadimg");

const jwt = require('jsonwebtoken')


const insertarAuto = async (req, res = response) => {
    const{...body}=req.body;
    const result = await cloudinary.uploader.upload(req.file.path);
    const URLIMG = result.url
    body.foto=URLIMG
    console.log(body);
    const autos = new AutoModel(body);
    const nuevoAuto= await autos.save();
    res.json(nuevoAuto);
}

const readAuto = async (req, res) => {
    const data = await AutoModel.find().sort({ date: "desc" })
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

const readAutoUser = async (req, res) =>{
  const data = await AutoModel.find({usuario: req.userId})
  res.status(200).json(data)
}

const deleteAuto = async (req, res) =>{
  const { id } = req.params;
  const autoDelete = await AutoModel.findByIdAndRemove(id)
  res.status(200).json({msg: `El auto fue eliminado satisfactoriamente`})
}

const statusAuto = async (req, res) => {
  const { id } = req.params;
  const estado = await AutoModel.findById(id)
  estado.status = !estado.status
  await estado.save()
  res.status(200).json({msg: `Estado del auto modificado satisfactoriamente`})
}

module.exports={insertarAuto,readAuto,readAutoByID, deleteAuto, readAutoUser, statusAuto};