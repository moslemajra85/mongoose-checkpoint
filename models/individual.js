const mongoose = require('mongoose');

const individualSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: Number,
  favoriteFood: [String],
});

const Individual = mongoose.model('Individual', individualSchema);

module.exports = Individual;
