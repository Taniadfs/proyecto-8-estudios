const Estudio = require('../models/estudio')
const cloudinary = require('../../config/cloudinary')

const createEstudio = async (req, res) => {
  try {
    let urlImagen = null
    if (req.file) {
      const fileStr = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`

      const resultado = await cloudinary.uploader.upload(fileStr, {
        resource_type: 'auto'
      })

      urlImagen = resultado.secure_url
    }

    const nuevoEstudio = new Estudio({ ...req.body, imagen: urlImagen })
    const estudioGuardado = await nuevoEstudio.save()
    res.status(201).json(estudioGuardado)
  } catch (error) {
    res
      .status(400)
      .json({ message: 'error al crear el estudio', error: error.message })
  }
}

const getEstudios = async (req, res) => {
  try {
    const estudios = await Estudio.find()
    res.status(200).json(estudios)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'error al obtener los estudios', error: error.message })
  }
}
const getEstudioById = async (req, res) => {
  try {
    const estudio = await Estudio.findById(req.params.id)
    if (!estudio) {
      return res.status(404).json({ message: 'Estudio no encontrado' })
    }
    res.status(200).json(estudio)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'error al obtener el estudio', error: error.message })
  }
}

const updateEstudio = async (req, res) => {
  try {
    const { id } = req.params

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: 'No hay datos para actualizar' })
    }
    const estudioActualizado = await Estudio.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!estudioActualizado) {
      return res.status(404).json({ message: 'Estudio no encontrado' })
    }
    res.status(200).json(estudioActualizado)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'error al actualizar el estudio', error: error.message })
  }
}

const deleteEstudio = async (req, res) => {
  try {
    const { id } = req.params
    const estudioEliminado = await Estudio.findByIdAndDelete(id)
    if (!estudioEliminado) {
      return res.status(404).json({ message: 'Estudio no encontrado' })
    }
    res.status(200).json({ message: 'Estudio eliminado correctamente' })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'error al eliminar el estudio', error: error.message })
  }
}

module.exports = {
  createEstudio,
  getEstudios,
  getEstudioById,
  updateEstudio,
  deleteEstudio
}
