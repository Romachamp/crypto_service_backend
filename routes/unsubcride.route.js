const express = require('express');

const router = express.Router();

const unsubcrideController = require('../controllers/unsubcride.controller');

router.route('/').post(unsubcrideController.unsubcride);

module.exports = router;