const express = require('express');
const router = express.Router();
const {  RegisterFunction, LoginFunction,LogoutFunction} = require('../controller/AuthFunction');

router.post('/register', RegisterFunction);
router.post('/login', LoginFunction);
router.post('/logout', LogoutFunction);


module.exports = router;