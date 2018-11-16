const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    title: String,
    picture: String,
    color: String,
    userId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);