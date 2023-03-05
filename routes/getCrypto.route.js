const express = require('express');

const router = express.Router();

const getCryptoController = require('../controllers/getCrypto.controller');

router.route('/').get(getCryptoController.getCrypto);

module.exports = router;