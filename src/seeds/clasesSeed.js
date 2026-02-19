const mongoose = require('mongoose')
const Clase = require('../api/models/clase')
const Estudio = require('../api/models/estudio')
const { connectDB } = require('../config/db')

const seedClases = async () => {
  await connectDB()
  const estudios = await Estudio.find()

  const clasesData = [
    {
      nombre: 'Hatha yoga para principiantes',
      tipo: 'Hatha yoga',
      dia: 'Lunes',
      hora: '10:00',
      duracion: 60,
      nivel: 'Principiante',
      instructor: 'Ana López',
      studioId: estudios[0]._id,
      imagen:
        'https://res.cloudinary.com/dx7k0jw0f/image/upload/v1708842964/clase-hatha_yoga_ajlq8c.jpg'
    },
    {
      nombre: 'Pilates reformer intermedio',
      tipo: 'Pilates reformer',
      dia: 'Miércoles',
      hora: '18:00',
      duracion: 45,
      nivel: 'Intermedio',
      instructor: 'Carlos Gómez',
      studioId: estudios[1]._id,
      imagen:
        'https://res.cloudinary.com/dx7k0jw0f/image/upload/v1708842964/clase-pilates_reformer_ql5l8h.jpg'
    },
    {
      nombre: 'Yoga nidra avanzado',
      tipo: 'Yoga nidra',
      dia: 'Viernes',
      hora: '20:00',
      duracion: 90,
      nivel: 'Avanzado',
      instructor: 'María Rodríguez',
      studioId: estudios[0]._id,
      imagen:
        'https://res.cloudinary.com/dx7k0jw0f/image/upload/v1708842964/clase-yoga_nidra_ql5l8h.jpg'
    }
  ]

  await Clase.deleteMany({})
  for (const clase of clasesData) {
    await Clase.create(clase)
  }
}

seedClases()
  .then(() => {
    console.log('Clases seeders ejecutados correctamente')
    mongoose.connection.close()
  })
  .catch((error) => {
    console.error('Error al ejecutar los clases seeders:', error)
    mongoose.connection.close()
  })
