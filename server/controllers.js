/* eslint-disable no-console */
const Jokes = require('./models');

exports.postJoke = (req, res) => {
  Jokes.findOneAndUpdate(
    { name: req.body.name },
    { name: req.body.name, $push: { jokes: req.body.jokes } },
    { upsert: true },
  )
    .then(() => res.sendStatus(201))
    .catch((err) => console.log(err));
};

exports.getJoke = (req, res) => {
  Jokes.find(req.query)
    .then((data, err) => {
      if (err) {
        console.log(err);
      } else {
        const index = Math.floor(Math.random() * data[0].jokes.length);
        res.send(data[0].jokes[index]);
      }
    })
    .catch((err) => console.log(err));
};
