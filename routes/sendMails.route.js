const express = require('express');

const router = express.Router();

const sendMailsController = require('../controllers/sendMails.controller');

router.route('/').post(sendMailsController.sendMails);

module.exports = router;