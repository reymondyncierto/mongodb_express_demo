const mongoose = require('mongoose'); // importing the mongoose library

const uri = 'mongodb+srv://pad:ysesyses@cluster0.hxxvkh0.mongodb.net/jpads_db?retryWrites=true&w=majority' // mongodb connection uri

module.exports = () => { // exporting a function that connects to the MongoDB database using the URI
  return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
}