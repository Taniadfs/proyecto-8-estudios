const Clase = require('../models/Clase')
const Estudio = require('../models/estudio')

const createClase = async (req, res) => {
  try {
    const estudioExiste = await Estudio.findById(req.body.studioId)
    if (!estudioExiste) {
      return res.status(404).json({ message: 'El estudio no existe' })
    }
    const nuevaClase = new Clase(req.body)
    const claseGuardada = await nuevaClase.save()
    res.status(201).json(claseGuardada)
  } catch (error) {
    res
      .status(400)
      .json({ message: 'error al crear la clase', error: error.message })
  }
}

const getClases = async (req, res) => {
  try {
    const clases = await Clase.find()
    res.status(200).json(clases)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'error al obtener las clases', error: error.message })
  }
}
const getClaseById = async (req, res) => {
  try {
    const clase = await Clase.findById(req.params.id)
    if (!clase) {
      return res.status(404).json({ message: 'Clase no encontrada' })
    }
    res.status(200).json(clase)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'error al obtener la clase', error: error.message })
  }
}

const updateClase = async (req, res) => {
  try {
    const { id } = req.params

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: 'No hay datos para actualizar' })
    }

    if (req.body.studioId) {
      const estudioExiste = await Estudio.findById(req.body.studioId)
      if (!estudioExiste) {
        return res.status(404).json({ message: 'El estudio no existe' })
      }
    }
    const claseActualizada = await Clase.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!claseActualizada) {
      return res.status(404).json({ message: 'Clase no encontrada' })
    }
    res.status(200).json(claseActualizada)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'error al actualizar la clase', error: error.message })
  }
}

const deleteClase = async (req, res) => {
  try {
    const { id } = req.params
    const claseEliminada = await Clase.findByIdAndDelete(id)
    if (!claseEliminada) {
      return res.status(404).json({ message: 'Clase no encontrada' })
    }
    res.status(200).json({ message: 'Clase eliminada correctamente' })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'error al eliminar la clase', error: error.message })
  }
}

module.exports = {
  createClase,
  getClases,
  getClaseById,
  updateClase,
  deleteClase
}
