const servicesForTasks = require('../services/tasks.services')

const createTask = async (req, res) => {
    const result = await servicesForTasks.newTask(req.body)
    console.log(result)
    if(result.statusCode === 201){
        res.status(201).json({msg: result.msg, task: result.task})
    } else {
        res.status(500).json({msg: result.msg})
    }
}

const getAllTasks = async (req, res) => {
    const result = await servicesForTasks.getTasks()

    if(result.statusCode === 200){
        res.status(200).json(result.tasks)
    } else {
        res.status(500).json({msg: result.msg})
    }
}

const getOneTask = async (req, res) => {
    const result = await servicesForTasks.getTask(req.params.taskId)

    if(result.statusCode === 200){
        res.status(200).json(result.task)
    } else {
        res.status(500).json({msg: result.msg})
    }
}

const editTask = async (req, res) => {
    const result = await servicesForTasks.updateTask(req.body, req.params.taskId)

    if(result.statusCode === 200){
        res.status(200).json({msg: result.msg})
    } else {
        res.status(500).json({msg: result.msg})
    }
}

const markTask = async (req, res) => {
    const result = await servicesForTasks.completeTask(req.params.taskId)

    if(result.statusCode === 200){
        res.status(200).json(result.updatedTask)
    } else {
        res.status(500).json({msg: result.msg})
    }
}

const deleteTask = async (req, res) => {
    const result = await servicesForTasks.removeTask(req.params.taskId)

    if(result.statusCode === 200){
        res.status(200).json({msg: result.msg})
    } else {
        res.status(500).json({msg: result.msg})
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getOneTask,
    editTask,
    markTask,
    deleteTask
}