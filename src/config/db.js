const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Conexión a la base de datos establecida')
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error)
  }
}

module.exports = { connectDB }
