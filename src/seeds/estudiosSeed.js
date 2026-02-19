const mongoose = require('mongoose')
const Estudio = require('../api/models/estudio')
const { connectDB } = require('../config/db')

const estudiosData = [
  {
    nombre: 'Estudio de Yoga',
    email: 'yoga@estudio.com',
    direccion: 'Calle Principal 123',
    descripcion: 'Un estudio de yoga para todos los niveles',
    telefono: '555-1234',
    imagen:
      'https://res.cloudinary.com/dx7k0jw0f/image/upload/v1708842964/estudio-yoga_zc7g8l.jpg'
  },
  {
    nombre: 'Estudio de Pilates y yoga',
    email: 'pilateyyogas@estudio.com',
    direccion: 'Avenida Secundaria 456',
    descripcion:
      'Un estudio de pilates y yoga para mejorar tu postura y fuerza',
    telefono: '555-5678',
    imagen:
      'https://res.cloudinary.com/dx7k0jw0f/image/upload/v1708842964/estudio-pilates_qlmz9r.jpg'
  },
  {
    nombre: 'Estudio de Pilates',
    email: 'pilates@estudio.com',
    direccion: 'Calle Terciaria 789',
    descripcion: 'Un estudio de pilates para quemar calorías y divertirte',
    telefono: '555-9012',
    imagen:
      'https://res.cloudinary.com/dx7k0jw0f/image/upload/v1708842964/estudio-pilates_qlmz9r.jpg'
  }
]

const seedEstudios = async () => {
  await connectDB()
  await Estudio.deleteMany({})
  for (const estudio of estudiosData) {
    await Estudio.create(estudio)
  }
}

seedEstudios()
  .then(() => {
    console.log('Estudios seeders ejecutados correctamente')
    mongoose.connection.close()
  })
  .catch((error) => {
    console.error('Error al ejecutar los estudios seeders:', error)
    mongoose.connection.close()
  })
