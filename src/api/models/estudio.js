const mongoose = require('mongoose')
const estudioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'El email es obligatorio'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, 'Por favor ingrese un email válido']
    },
    direccion: {
      type: String,
      unique: true,
      trim: true
    },
    descripcion: {
      type: String,
      trim: true
    },
    telefono: {
      type: String,
      unique: true,
      trim: true
    },
    imagen: { type: String, trim: true }
  },

  { timestamps: true, collection: 'estudios' }
)
const Estudio = mongoose.model('Estudio', estudioSchema)
module.exports = Estudio
