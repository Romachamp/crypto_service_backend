const subcrideService = require('../services/subcride.service');

class SubcrideController {
    async subcride(req, res) {
        const mail = req.query.mail;
        res.send(await subcrideService.subcride(mail));
    }
}

module.exports = new SubcrideController();