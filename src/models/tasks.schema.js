const {Schema, model} = require('mongoose')

const tasksSchema = new Schema({
    task: {
        type: String,
        require: true,
        trim: true,
        min: [3, "The minimun allowed is 5 characters"],
        max: [75, "The maximum allowed is 75 characters"],
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const TaskModel = model('tasks', tasksSchema)
module.exports = TaskModel