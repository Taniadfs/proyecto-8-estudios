const express = require('express')
const router = express.Router()
const {
  createClase,
  getClases,
  getClaseById,
  updateClase,
  deleteClase
} = require('../controllers/clases')
const upload = require('../middlewares/upload')

router.post('/', upload, createClase)
router.get('/', getClases)
router.get('/:id', getClaseById)
router.put('/:id', upload, updateClase)
router.delete('/:id', deleteClase)

module.exports = router
