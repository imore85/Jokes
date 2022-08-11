/* eslint-disable no-console */
require('dotenv').config();
const mongoose = require('mongoose');

const db = mongoose
  .connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`)
  .then(() => {
    console.log(`Mongodb connected...  ${process.env.DB_NAME}`);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
