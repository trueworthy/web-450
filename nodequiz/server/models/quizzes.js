const mongoose = require('mongoose');

let quizSchema = mongoose.Schema({
  quizId: String,
  quizName: String,
  quizDescription: String,
  answers: String,
});

module.exports = mongoose.model('Quiz', quizSchema);