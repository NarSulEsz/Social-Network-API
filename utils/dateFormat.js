const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp) // Using the dateFormat utility
  },
  // Other fields...
}, {
  toJSON: {
    getters: true
  },
  id: false
});

module.exports = model('Thought', thoughtSchema);
