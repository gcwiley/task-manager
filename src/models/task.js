const mongoose = require('mongoose');

// create the task schema
const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        trim: true,
    },
    createdDate: Date,
    completedDate: Date,
    completed: Boolean
});

// create the model and export the model
module.exports = mongoose.model('Task', taskSchema);