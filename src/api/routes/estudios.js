const express = require('express')
const router = express.Router()
const {
  createEstudio,
  getEstudios,
  getEstudioById,
  updateEstudio,
  deleteEstudio
} = require('../controllers/estudios')

router.post('/', createEstudio)
router.get('/', getEstudios)
router.get('/:id', getEstudioById)
router.put('/:id', updateEstudio)
router.delete('/:id', deleteEstudio)

module.exports = router
