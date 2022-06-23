const { UserModel } = require('../models')

const createUser = async (req, res) => {
    const { ...data } = req.body
    const existeUser = await UserModel.findOne({
        telefono : data.telefono
    })
    if(existeUser){
        return res.json({msg: `El numero de telefono: ${data.telefono} ya se encuentra registrado`})
    }
    const user = new UserModel(data);
    const userCreate = await user.save();
    res.status(200).json({msg: `El usuario fue creado satisfactoriamente`})
}

const readUser = async (req, res) => {
    const data = await UserModel.find()
    res.status(200).json(data)
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { ...data } = req.body;
    const userUpdate = await UserModel.findByIdAndUpdate(id, data, {new: true})
    res.status(200).json({msg: `El usuario fue actualizado satisfactoriamente`})
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const userDelete = await UserModel.findByIdAndRemove(id)
    res.status(200).json({msg: `El usuario fue eliminado satisfactoriamente`})
}

module.exports = { createUser, readUser, updateUser, deleteUser }