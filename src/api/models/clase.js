const mongoose = require('mongoose')
const claseSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true
    },
    tipo: {
      type: String,
      required: [true, 'El tipo es obligatorio'],
      enum: [
        'Hatha yoga',
        'Pilates',
        'Pilates reformer',
        'Pilates flow',
        'Yoga nidra',
        'Yin yoga'
      ]
    },
    dia: {
      type: String,
      required: [true, 'El día es obligatorio'],
      enum: {
        values: [
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sábado',
          'Domingo'
        ]
      }
    },
    hora: {
      type: String,
      required: [true, 'La hora es obligatoria'],
      trim: true
    },
    duracion: {
      type: Number,
      required: [true, 'La duración es obligatoria']
    },
    nivel: {
      type: String,
      required: [true, 'El nivel es obligatorio'],
      enum: {
        values: ['Principiante', 'Intermedio', 'Avanzado']
      }
    },
    instructor: {
      type: String,
      required: [true, 'El instructor es obligatorio'],
      trim: true
    },

    imagen: {
      type: String,
      trim: true
    },
    studioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Estudio',
      required: [true, 'El estudio es obligatorio']
    }
  },
  { timestamps: true, collection: 'clases' }
)
const Clase = mongoose.model('Clase', claseSchema)
module.exports = Clase
