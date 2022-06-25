const {response}= require('express')
const { AutoModel } = require('../models')


const insertarAuto = async (req, res = response) => {
    const{...body}=req.body;
    console.log(body);
    const autos = new AutoModel(body);
    const nuevoAuto= await autos.save();
    res.json(nuevoAuto);
  }

  module.exports={insertarAuto};