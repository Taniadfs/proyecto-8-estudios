const Estudio = require('../models/estudio')

const createEstudio = async (req, res) => {
  try {
    const nuevoEstudio = new Estudio(req.body)
    const estudioGuardado = await nuevoEstudio.save()
    res.status(201).json(estudioGuardado)
  } catch (error) {
    res.status(400).json({ message: 'error al crear el estudio' })
  }
}

module.exports = { createEstudio }

//CRUD Estudios

// Crear un nuevo estudio
//create / read/ update / delete
