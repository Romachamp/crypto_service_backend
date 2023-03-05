const express = require('express');

const router = express.Router();

const getCryptoRoute = require('./getCrypto.route');
const subcrideRoute = require('./subcride.route');
const unsubcrideRoute = require('./unsubcride.route');
const adminRoute = require('./admin.route');

router.use('/subcride', subcrideRoute);
router.use('/getCrypto', getCryptoRoute);
router.use('/admin', adminRoute);
router.use('/unsubcride', unsubcrideRoute);

module.exports = router;

// api/admin/sendMails/