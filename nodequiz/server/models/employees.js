const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let employeeSchema = new Schema({
    employeeId: { type: String, required: true },
    firstname: { type: String },
    lastname: { type: String }
})

module.exports = mongoose.model('Employee', employeeSchema)