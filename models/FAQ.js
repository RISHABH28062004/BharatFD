const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    question_hi: { type: String, default: "" },
    question_bn: { type: String, default: "" },
}, { timestamps: true });

module.exports = mongoose.model('FAQ', FAQSchema);
