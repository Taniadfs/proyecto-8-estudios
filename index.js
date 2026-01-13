require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')

connectDB()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.listen(port, () => {
  console.log(`Servidor levantado en: http://localhost:${port}`)
})
