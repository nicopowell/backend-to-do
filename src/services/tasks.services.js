const TaskModel = require('../models/tasks.schema')

const newTask = async (body) => {
    try {
        const task = new TaskModel(body)
        await task.save()
        return {
            msg: 'Task created',
            statusCode: 201,
        }
    } catch (error) {
        return {
            msg: 'Error creating task',
            statusCode: 500,
            error
        }
    }
}

const getTasks = async () => {
    try {
        const tasks = await TaskModel.find()
        return {
            tasks,
            statusCode: 200,
        }
    } catch (error) {
        return {
            msg: 'Error getting all tasks',
            statusCode: 500,
            error
        }
    }
}

const getTask = async (taskId) => {
    try {
        
        const task = await TaskModel.findOne({_id: taskId})
        console.log(task)
        return {
            task,
            statusCode: 200,
        }
    } catch (error) {
        return {
            msg: 'Error getting a task',
            statusCode: 500,
            error
        }
    }
}

const updateTask = async (body, taskId) => {
    try {
       await TaskModel.findByIdAndUpdate(taskId, body)
       return {
            msg: 'Task updated',
            statusCode: 200
       }
    } catch (error) {
        return {
            msg: 'Error updating a task',
            statusCode: 500,
            error
        }
    }
}

const completeTask = async (taskId) => {
    try {
    const task = await TaskModel.findById(taskId)

    task.completed = !task.completed

    const updatedTask = await TaskModel.findByIdAndUpdate(taskId, task, {new: true})

    return{
        updatedTask,
        statusCode: 200
    }
    } catch (error) {
        return {
            msg: 'Error marking a task',
            statusCode: 500,
            error
        }
    }
}

const removeTask = async (taskId) => {
    try {
        await TaskModel.findByIdAndDelete(taskId)
        return {
            msg: 'Task deleted',
            statusCode: 200
        }
    } catch (error) {
        return {
            msg: 'Error deleting a task',
            statusCode: 500,
            error
        }
    }
}

module.exports = {
    newTask,
    getTasks,
    getTask,
    updateTask,
    completeTask,
    removeTask
}