const express = require('express')
const router = express.Router()
const {
  createEstudio,
  getEstudios,
  getEstudioById,
  updateEstudio,
  deleteEstudio
} = require('../controllers/estudios')
const upload = require('../../middlewares/upload')

router.post('/', upload, createEstudio)
router.get('/', getEstudios)
router.get('/:id', getEstudioById)
router.put('/:id', upload, updateEstudio)
router.delete('/:id', deleteEstudio)

module.exports = router
