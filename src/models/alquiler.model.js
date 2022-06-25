const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlquilerSchema = new Schema(
  {
    usuario: { 
      type: Schema.Types.ObjectId,
      ref:'usuario',
      required:[ true, 'El usuario es requerido'] },
    auto: { 
      type: Schema.Types.ObjectId,
      ref:'auto',
      required:[ true, 'El auto es requerido'] },
    fechareserva:{
      type: Date,
      required:[ true, 'La fecha de la reserva es requerida']},
    fechafinreserva:{
      type: Date,
      required:[ true, 'La fecha del fin de la reserva es requerida']},
    totalpagar:{
      type: String,
      required:[ true, 'El valor total es requerido']},


  }
)

AlquilerSchema.methods.toJSON = function(){
  const {__v, ...data}=this.toObject();
  return data;
}

module.exports = mongoose.model('alquiler',AlquilerSchema)