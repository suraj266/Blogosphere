const express = require('express');
const router = express.Router();
const Controller = require("../controllers/comment/Comment.Controller");
const userAuth = require('../middleware/User.middleware');

router.route("/add").post(userAuth, Controller.add);
router.route("/list").post(Controller.list);

module.exports = router;