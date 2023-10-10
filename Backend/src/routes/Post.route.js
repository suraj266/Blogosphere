const express = require('express');
const router = express.Router();
const Controller = require("../controllers/post/Post.Controller");
const user = require('../middleware/User.middleware')

router.route("/add").post(user, Controller.add);
router.route("/list").post(Controller.list);
router.route("/postDetails").post(Controller.postDetails);

module.exports = router;