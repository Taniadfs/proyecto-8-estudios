const express = require('express')
const router = express.Router()
const {
  createClase,
  getClases,
  getClaseById,
  updateClase,
  deleteClase
} = require('../controllers/clases')

router.post('/', createClase)
router.get('/', getClases)
router.get('/:id', getClaseById)
router.put('/:id', updateClase)
router.delete('/:id', deleteClase)

module.exports = router
