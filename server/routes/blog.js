const express = require("express");
const { BlogGetFun, BlogPostFun } = require('../controller/blogFunction.js');

const router = express.Router();

router.get('/blog', BlogGetFun);
router.post('/blog', BlogPostFun);


module.exports = router;