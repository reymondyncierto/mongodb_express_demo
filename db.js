const mongoose = require('mongoose');

const uri = 'mongodb+srv://pad:ysesyses@cluster0.hxxvkh0.mongodb.net/jpads_db?retryWrites=true&w=majority'

module.exports = () => {
  return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
}