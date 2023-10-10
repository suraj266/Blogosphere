const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Category = mongoose.model('category', Schema);
module.exports = Category;