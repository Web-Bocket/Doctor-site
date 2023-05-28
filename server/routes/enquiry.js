const express = require('express');
const router = express.Router();
const { EnquiryPostFun, EnquiryGetFun, EnquiryDeleteFun } = require('../controller/EnquiryFunction');
const isAuthenticated = require("../middleware/Auth");


router.post('/enquiry', isAuthenticated, EnquiryPostFun);
router.get('/enquiry', isAuthenticated,  EnquiryGetFun);
router.delete("/enquiry/:id", isAuthenticated, EnquiryDeleteFun);

module.exports = router;