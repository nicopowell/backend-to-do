require('dotenv').config()
require('./src/db/config')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3001

// Middlewares
app.use(express.json())
app.use(morgan('tiny'))
app.use('/api', require('./src/routes/index.routes'))

app.listen(port, () => {
    console.log('Server working on port ', port)
})