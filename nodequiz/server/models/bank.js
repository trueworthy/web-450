/**
 * Author: Lea Trueworthy
 * Description: store scores
 */

 const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bankSchema = new Schema({
  bank: any,
  quizName: { type: Schema.Types.ObjectId, ref: "bank" },
  bankId: Number,
  quizName: String,
  questions: [bankSchema]
});

module.exports = mongoose.model("bankSchema", bankSchema);