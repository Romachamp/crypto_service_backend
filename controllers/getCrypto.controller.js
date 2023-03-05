const getCrypto = require('../services/getCrypto.service');

class GetCryptoController {
    async getCrypto(req, res) {
        const fromCurrency = req.query.fromCurrency;
        const toCurrency = req.query.toCurrency;
        res.send(await getCrypto.getCrypto(fromCurrency, toCurrency));
    }
}

module.exports = new GetCryptoController();