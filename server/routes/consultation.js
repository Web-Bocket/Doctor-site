const express = require('express');
const router = express.Router();
const { PostConsultFunction, ConsultationGetFun, ConsultationDeleteFun } = require('../controller/ConsultationFunction');
const isAuthenticated = require("../middleware/Auth");


router.post('/consultation', isAuthenticated,  PostConsultFunction);
router.get('/consultation', ConsultationGetFun);
router.delete("/consultation/:id", ConsultationDeleteFun);

module.exports = router;