const express = require('express');
const router = express.Router();
const {AppointmentPostFun, AppointmentGetFun, AppointmentDeleteFun} = require('../controller/AppointmentFunction');

router.post("/appointment", AppointmentPostFun);
router.get("/appointment", AppointmentGetFun);
router.delete('/appointment/:id', AppointmentDeleteFun);

module.exports = router;