const express = require('express')
const { createTask, getAllTasks, getOneTask, editTask, markTask, deleteTask } = require('../controllers/tasks.controllers')
const router = express.Router()

router.post('/', createTask)
router.get('/', getAllTasks)
router.get('/:taskId', getOneTask)
router.put('/:taskId', editTask)
router.put('/mark/:taskId', markTask)
router.delete('/:taskId', deleteTask)

module.exports = router