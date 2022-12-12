const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        // required: true,
    }
})

const todo = new mongoose.model('todo', todoSchema)
module.exports = todo;