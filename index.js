require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const estudiosRoutes = require('./src/api/routes/estudios')
const clasesRoutes = require('./src/api/routes/clases')

const app = express()
const port = process.env.PORT || 3000
connectDB()

app.use(express.json())

app.use('/api/estudios', estudiosRoutes)
app.use('/api/clases', clasesRoutes)
app.use((err, req, res, next) => {
  res
    .status(500)
    .json({ message: 'Error interno del servidor', error: err.message })
})
app.listen(port, () => {
  console.log(`Servidor levantado en: http://localhost:${port}`)
})
