const express = require("express");
const { BlogGetFun, BlogOneFun, BlogPostFun } = require('../controller/blogFunction.js');

const router = express.Router();

router.get('/blog', BlogGetFun);
router.get("/blog/:id", BlogOneFun);
router.post('/blog', BlogPostFun);


module.exports = router;