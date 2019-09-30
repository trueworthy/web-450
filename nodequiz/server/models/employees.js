/**
 * Author: Lea Trueworthy
 * Description: employee numbers allowed to sign in
 */

 const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let employeeSchema = mongoose.Schema({
    employeeId: String,
    firstName: String,
    lastName: String
  });

module.exports = mongoose.model('Employee', employeeSchema);