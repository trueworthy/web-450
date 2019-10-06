const mongoose = require('mongoose');

let quizSchema = mongoose.Schema({
  quizId: String,
  quizName: String,
  quizDescription: String,
  cumulativeScore: String
});

module.exports = mongoose.model('Quiz', quizSchema);