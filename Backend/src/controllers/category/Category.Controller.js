const joi = require('joi');
const Category = require('../../models/Category.model')

module.exports.add = async (req, res) => {
    try {
        const schema = joi.object({
            name: joi.string()
        });
        const { err, value } = schema.validate({
            name: req.body.catName
        })
        if (!err) {
            const category = new Category(value);
            await category.save();
            res.status(201).json({ status: true, Message: "Category Added Successfully " });
        } else {
            res.status(400).json({ status: false, err });
        }
    } catch (error) {
        res.status(400).json({ status: false, error })
    }
}

module.exports.list = async (_req, res) => {
    try {
        const category = await Category.find();
        if (category.length) {
            res.status(200).json({ status: true, category: category });
        } else {
            res.status(400).json({ status: false, message: 'no data found...' });
        }
    } catch (err) {
        res.status(400).json({ status: false, err: `${err}` });
    }
}