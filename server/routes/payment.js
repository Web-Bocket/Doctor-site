const express = require('express');
const router = express.Router();
const { OrderFun, VerifyFun } = require('../controller/PaymentFunction');

router.get('/orders', (req, res) => {
    res.send("Backend of Payment System is working");
});
router.post('/orders', OrderFun);
router.post('/verify', VerifyFun);

module.exports = router;