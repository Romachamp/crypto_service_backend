const collectMailsService = require('../services/collectMails.service');

class SendMailsController {
    async sendMails(req, res) {
        const fromCurrency = req.query.fromCurrency;
        const toCurrency = req.query.toCurrency;
        const key = req.query.key;
        res.send(await collectMailsService.collectMails(fromCurrency, toCurrency, key));
    }

}

module.exports = new SendMailsController();