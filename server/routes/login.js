const express = require('express');
const router = express.Router();
const {  RegisterFunction, LoginFunction,LogoutFunction, UserGetFun, UserDeleteFun} = require('../controller/AuthFunction');
const isAuthenticated = require('../middleware/Auth');

router.post('/register', RegisterFunction);
router.post('/login', LoginFunction);
router.get('/logout', LogoutFunction);
router.get('/user', isAuthenticated, UserGetFun);
router.delete("/user/:id", UserDeleteFun);


module.exports = router;