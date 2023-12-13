const mongoose = require('mongoose');

module.exports = mongoose.model('jpads', {
    full_name: { type: String, required: true },
    email: { type: String, required: true },
});