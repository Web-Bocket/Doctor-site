const express = require('express');
const router = express.Router();
const { EnquiryPostFun, EnquiryGetFun, EnquiryDeleteFun } = require('../controller/EnquiryFunction');
const isAuthenticated = require("../middleware/Auth");


router.post('/enquiry', isAuthenticated, EnquiryPostFun);
router.get('/enquiry',  EnquiryGetFun);
router.delete("/enquiry/:id", EnquiryDeleteFun);

module.exports = router;