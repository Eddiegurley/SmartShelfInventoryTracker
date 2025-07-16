const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  restockThreshold: { type: Number, required: true },
  dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', itemSchema);
