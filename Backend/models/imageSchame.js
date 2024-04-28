const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  dimensions: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
