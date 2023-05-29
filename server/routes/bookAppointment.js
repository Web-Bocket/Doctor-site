const express = require('express');
const router = express.Router();
const { AppointmentPostFun, AppointmentGetFun, AppointmentDeleteFun } = require('../controller/AppointmentFunction');
const isAuthenticated = require("../middleware/Auth");

router.post("/appointment", isAuthenticated, AppointmentPostFun);
router.get("/appointment", AppointmentGetFun);
router.delete('/appointment/:id', AppointmentDeleteFun);

module.exports = router;