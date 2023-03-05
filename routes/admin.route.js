const express = require('express');

const router = express.Router();

const sendMailsRoute = require('./sendMails.route');

router.use('/sendMails', sendMailsRoute);

module.exports = router;