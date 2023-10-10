const mongoose = require('mongoose')

const Schema = new mongoose.Schema({

    follower_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
    following_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

})

const Follow = mongoose.model('follow', Schema);
module.exports = Follow