const express = require('express');
const router = express.Router();
const { PostConsultFunction, ConsultationGetFun, ConsultationDeleteFun } = require('../controller/ConsultationFunction');

router.post('/consultation', PostConsultFunction);
router.get('/consultation', ConsultationGetFun);
router.delete("/consultation/:id", ConsultationDeleteFun);

module.exports = router;