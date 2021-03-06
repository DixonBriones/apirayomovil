const { UserModel, AutoModel } = require('../models')
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const { telefono, username, password } = req.body
    const existeUser = await UserModel.findOne({
        username: username
    })
    if(existeUser){
        return res.json({msg: `El username: ${username} ya se encuentra registrado`})
    }
    const user = new UserModel({telefono, username, password});
    user.password = await user.encryptPassword(password)
    const userCreate = await user.save();

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
        expiresIn: 60*60*24
    })
    res.status(200).json({msg: `El usuario fue creado satisfactoriamente`, auth: true, token})
}

const login = async (req, res) => {
    const { username, password } = req.body
    const existeUser = await UserModel.findOne({
        username : username
    })
    if(!existeUser){
        return res.json({msg: 'Usuario no encontrado'})
    }else{
        const comparacion = await existeUser.comparePassword(password)
        if(!comparacion){
            return res.json({msg: 'Contraseña incorrecta'})
        }else{
            const token = jwt.sign({id: existeUser._id}, process.env.JWT_SECRET, { expiresIn: 86400 })
            return res.json({msg: 'Bienvenid@', auth: true, accessToken : token, username: username, _id : existeUser._id, telefono: existeUser.telefono, firstname: existeUser.firstname, lastname: existeUser.lastname, useremail: existeUser.useremail, location : existeUser.location})
        }
    }
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

const deleteAccount = async (req, res) => {
    const { id } = req.params;
    const userDelete = await UserModel.findByIdAndRemove(id)
    const autoUserDelete = await AutoModel.deleteMany({ usuario : id})
    res.status(200).json({msg: `El usuario fue eliminado satisfactoriamente`})
}

const readOneUser = async (req, res) =>{
    const { username } = req.params
    const data = await UserModel.findOne(username)
    if(data){
        res.status(200).send(data)
    }else{
        res.json({msg: `Usuario no encontrado`})
    }   
}

module.exports = { register, login, readUser, updateUser, deleteAccount, readOneUser }