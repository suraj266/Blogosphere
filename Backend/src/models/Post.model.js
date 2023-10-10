const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
    categoryId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'category' },
    image: { type: String },
    title: { type: String, required: true },
    like: { type: Number, default: 0 },
    dislike: { type: Number, default: 0 },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Post = mongoose.model('post', Schema);
module.exports = Post;