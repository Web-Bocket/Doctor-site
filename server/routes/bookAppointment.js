const express = require('express');
const router = express.Router();
const AppointmentPostFun = require('../controller/AppointmentFunction');

router.post("/appointment", AppointmentPostFun);

module.exports = router;