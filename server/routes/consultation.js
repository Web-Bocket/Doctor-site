const express = require('express');
const router = express.Router();
const PostConsultFunction = require('../controller/ConsultationFunction');

router.post('/consultation', PostConsultFunction);

module.exports = router;