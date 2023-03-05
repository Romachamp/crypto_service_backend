const express = require('express');

const router = express.Router();

const subcrideController = require('../controllers/subcride.controller');

router.route('/').post(subcrideController.subcride);

module.exports = router;