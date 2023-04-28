const express = require('express');
const router = express.Router();
const { EnquiryPostFun, EnquiryGetFun, EnquiryDeleteFun } = require('../controller/EnquiryFunction');

router.post('/enquiry', EnquiryPostFun);
router.get('/enquiry', EnquiryGetFun);
router.delete("/enquiry/:id", EnquiryDeleteFun);

module.exports = router;