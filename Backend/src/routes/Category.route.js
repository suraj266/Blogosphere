const express = require('express');
const router = express.Router();
const Controller = require("../controllers/category/Category.Controller");
const adminAuth = require('../middleware/Admin.middleware');

router.route("/add").post(adminAuth, Controller.add);
// router.route("/update").post(adminAuth, Controller.add);
router.route("/list").post(Controller.list);

module.exports = router;