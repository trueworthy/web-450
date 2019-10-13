/**
 * Author: Lea Trueworthy
 * Description: store data from employee quizzes
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let quizSchema = new Schema({
  bankId: { type: Schema.Types.ObjectId, ref: "bank" },
  quizName: { type: Schema.Types.ObjectId, ref: "bank" },
  question: String,
  answers: {
    answer_1: String,
    answer_2: String,
    answer_3: String,
    answer_4: String,
    isCorrect: String
  }
});

let bankSchema = new Schema({
  bankId: Number,
  quizName: String,
  score: Number,
  questions: [quizSchema]
});

module.exports = mongoose.model("bank", bankSchema);