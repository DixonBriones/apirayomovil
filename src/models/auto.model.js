const mongoose = require('mongoose');
const { Schema } = mongoose;

const AutoSchema = new Schema(
  {
    usuario: { 
      type: Schema.Types.ObjectId,
      ref:'usuario',
      required:[ true, 'El usuario es requerido'] },
    marca:{
      type:String,
      required:[ true, 'La marca es requerida'],
      unique:false },
    foto: { 
      type: String, 
      required:[ true, 'La foto del auto es requerida'],
      unique:false },
    modelo: { 
      type: String, 
      required:[ true, 'El modelo del auto es requerida'],
      unique:false },
    traccion: { 
      type: String, 
      required:[ true, 'El tipo de traccion es requerido'],
      unique:false },
    year: { 
      type: Number, 
      required:[ true, 'El año del auto es requerido'],
      unique:false },
    precio: { 
      type: Number, 
      required:[ true, 'El precio por dia del auto es requerido'],
      unique:false },

  }
)

AutoSchema.methods.toJSON = function(){
  const {__v, ...data}=this.toObject();
  return data;
}

module.exports = mongoose.model('auto',AutoSchema)