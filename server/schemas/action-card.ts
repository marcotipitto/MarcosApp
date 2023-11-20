const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionCallback = new Schema({
    actionType: { type: String, enum: ['FILE', 'LINK', 'EMAIL'], required: true },
    action: { type: String, required: true }
});

const actionCardSchema = new Schema({
    title: { type: String, required: true },
    imageUrl: { type: String },
    imageAlt: { type: String },
    actionCallback,
    priority: { type: Number, required: true }
});

module.exports = mongoose.model('ActionCard', actionCardSchema);