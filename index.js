const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const productRoutes = require('./Routes/products.routes')
const authRoutes = require('./Routes/auth.routes')
const categoryRoutes = require('./Routes/categories.routes')
const cors = require('cors')
const DB_URI = process.env.DB_URI

mongoose
  .connect(`${DB_URI}`)
  .then(() => console.log('Connected to DB at ', DB_URI))
  .catch((e) => {
    console.log('Failed to connect to DB', e)
  })

const app = express()
app.use(cors())
app.use(express.json())
app.use('/products', productRoutes)
app.use('/categories', categoryRoutes)
app.use('/auth', authRoutes)

app.listen(process.env.PORT, () => {
  console.log('Server listening on PORT: ', process.env.PORT)
})
