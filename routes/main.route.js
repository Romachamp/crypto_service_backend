const express = require('express');

const router = express.Router();

const getCryptoRoute = require('./getCrypto.route');
const subcrideRoute = require('./subcride.route');
const unsubcrideRoute = require('./unsubcride.route');
const adminRoute = require('./admin.route');
const registerRoute = require('./register.route');
const loginRoute = require('./login.route');

router.use('/subcride', subcrideRoute);
router.use('/getCrypto', getCryptoRoute);
router.use('/admin', adminRoute);
router.use('/unsubcride', unsubcrideRoute);
router.use('/register', registerRoute);
router.use('/login', loginRoute);

module.exports = router;

// api/admin/sendMails/