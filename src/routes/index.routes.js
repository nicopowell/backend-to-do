const express = require('express')
const router = express.Router()

router.use('/tasks', require('./tasks.routes'))

module.exports = router