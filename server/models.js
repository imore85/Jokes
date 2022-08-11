const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  name: String,
  jokes: [String],
});

const Jokes = mongoose.model('jokes', jokeSchema);

module.exports = Jokes;
