const joi = require('joi');
const Comment = require('../../models/Comment.model');

module.exports.add = async (req, res) => {
    try {
        const schema = joi.object({
            postId: joi.string().required(),
            userId: joi.object().required(),
            comment: joi.string(),
        })
        const { error, value } = schema.validate({
            postId: req.body.postId,
            comment: req.body.comment,
            userId: req.userId
        })
        if (!error) {
            const post = new Comment(value);
            await post.save();
            res.status(201).json({ status: true, Message: "Post Added Successfully " });
        } else {
            res.status(400).json({ status: false, Error: `Else :  ${error}` })
        }
    } catch (err) {
        res.status(400).json({ status: false, Error: `Catch : ${err}` })
    }
}


module.exports.list = async (req, res) => {
    try {
        const schema = joi.object({
            postId: joi.string(),
            userId: joi.string(),
        })
        const { error, value } = schema.validate({
            userId: req.body.userId,
            postId: req.body.postId
        })
        if (error) {
            res.status(400).json({ status: false, err: `${err}` });
        }
        const opts = value.userId ? { userId: value.userId } : value.postId && { postId: value.postId }
        const post = await Comment.find(opts);
        if (post.length) {
            res.status(200).json({ status: true, post: post });
        }
        res.status(400).json({ status: false, message: 'no data found...' });
    } catch (err) {
        res.status(400).json({ status: false, err: `${err}` });
    }
}