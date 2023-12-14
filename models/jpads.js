const mongoose = require('mongoose'); // importing the mongoose library

module.exports = mongoose.model('jpads', { // exporting a mongoose model named jpads with the following schema
    full_name: { type: String, required: true },   
    email: { type: String, required: true },
});