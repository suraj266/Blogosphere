const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'post' },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
    like: { type: Number, required: true, default: 0 },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Comment = mongoose.model('comment', Schema);
module.exports = Comment;