const mongoose = require('mongoose');

let employeeSchema = new Schema({
    employeeId: { type: String, required: true },
    firstname: { type: String },
    lastname: { type: String }
})

module.exports = mongoose.model('Employee', employeeSchema)