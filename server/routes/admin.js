const express = require('express');
const router = express.Router();
const {AdminUserFunction} = require('../controller/AdminFunction');
const { UserGetFun} = require('../controller/AuthFunction');
const isAuthenticated = require('../middleware/Auth');

router.post('/adminLogin', AdminUserFunction);
router.get('/adminuser', isAuthenticated, UserGetFun);

module.exports = router;