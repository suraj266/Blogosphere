const joi = require('joi');
const Post = require('../../models/Post.model');
const Comment = require('../../models/Comment.model');
const uploadImage = require('../../utility/Cloudinary');
const { request } = require('express');

module.exports.add = async (req, res) => {
    try {
        const schema = joi.object({
            title: joi.string(),
            description: joi.string(),
            userId: joi.object().required(),
            categoryId: joi.string().required(),
            image: joi.string(),
        })
        const { error, value } = schema.validate({
            title: req.body.title,
            description: req.body.description,
            userId: req.userId,
            categoryId: req.body.category,
            image: await uploadImage(req.body.image)
        })
        console.log("++++++++++++++++++++++++++++");
        console.log(value);
        console.log("++++++++++++++++++++++++++++");
        if (!error) {
            const post = new Post(value);
            await post.save();
            res.status(201).json({ status: true, Message: "Post Added Successfully " });
        } else {
            console.log("joi error : ", error);
            res.status(400).json({ status: false, Error: `Else :  ${error}` })
        }
    } catch (err) {

        console.log("joi error : ", err);
        res.status(400).json({ status: false, Error: err })
    }
}


module.exports.list = async (req, res) => {
    try {
        const schema = joi.object({
            userId: joi.string(),
        })
        const { error, value } = schema.validate({
            userId: req.body.userId
        })
        const opts = value.userId ? { userId: value.userId } : null
        const post = await Post.find(opts).populate('userId', 'name');
        if (post.length) {
            res.status(200).json({ status: true, data: post });
        }
        res.status(400).json({ status: false, message: 'no data found...' });
    } catch (err) {
        console.log(err);
        res.status(400).json({ status: false, err: `${err}` });
    }
}

module.exports.postDetails = async (req, res) => {
    try {
        const schema = joi.object({
            postId: joi.string(),
        })
        const { error, value } = schema.validate({
            postId: req.body.postId
        })
        error && res.status(400).json({ error })
        const post = await Post.findById({ _id: value.postId }).populate('userId', 'name');
        const comments = await Comment.find({ postId: value.postId }).populate('userId', 'name');
        const blog = {
            post, comments
        }
        res.status(200).json({ status: true, data: blog });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}