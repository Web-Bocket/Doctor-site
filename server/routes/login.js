const express = require('express');
const router = express.Router();
const {  RegisterFunction, LoginFunction,LogoutFunction, UserGetFun, UsreDeleteFun} = require('../controller/AuthFunction');

router.post('/register', RegisterFunction);
router.post('/login', LoginFunction);
router.post('/logout', LogoutFunction);
router.get('/user', UserGetFun);
router.delete("/user/:id", UsreDeleteFun);

module.exports = router;