const mongoose = require('mongoose');

let quizSchema = mongoose.Schema({
  quizId: String,
  quizName: String,
  quizDescription: String,
  answers: [{
    answerText: {type: String},
    isCorrect: {type: Boolean}
}]});

module.exports = mongoose.model('Quiz', quizSchema);