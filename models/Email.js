const mongoose = require('mongoose');

const { Schema }   = mongoose;

const emailSchema = new Schema({
  email: String,
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

const User = mongoose.model('Email', emailSchema);
module.exports = User;