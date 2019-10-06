const mongoose = require('mongoose');

let quizSchema = mongoose.Schema({
  quizId: {type: Number, required: true},
  quizName: String,
  quizDescription: String,
  answers: String,
});

module.exports = mongoose.model('Quiz', quizSchema);