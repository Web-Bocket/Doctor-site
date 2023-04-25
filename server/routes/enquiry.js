const express = require('express');
const router = express.Router();
const EnquiryPostFun = require('../controller/EnquiryFunction');

router.post('/enquiry', EnquiryPostFun);

module.exports = router;