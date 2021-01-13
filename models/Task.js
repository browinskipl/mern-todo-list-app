const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const TaskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    list: {
        type: String,
        required: true
        /*
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List',
        required: true
        */
    }
})

module.exports = mongoose.model('Tasks', TaskSchema);
