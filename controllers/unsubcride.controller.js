const unsubcrideService = require('../services/unsubcride.service');

class UnSubcrideController {
    async unsubcride(req, res) {
        const mail = req.query.mail;
        res.send(await unsubcrideService.unsubcride(mail));
    }
}

module.exports = new UnSubcrideController();