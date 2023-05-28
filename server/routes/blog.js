const express = require("express");
const { BlogGetFun, BlogOneFun, BlogPostFun, BlogDeleteFun } = require('../controller/blogFunction.js');
const isAuthenticated = require('../middleware/Auth.js');

const router = express.Router();

router.get('/blog', BlogGetFun);
router.get("/blog/:id", BlogOneFun);
router.post('/blog', BlogPostFun);
router.delete("/blog/:id", BlogDeleteFun);

module.exports = router;