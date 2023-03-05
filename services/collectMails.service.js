const sendMailsService = require('./sendMails.service');
const dbService = require('./db.service');


class CollectMailsService {

    COLLECTION = 'Crypto';
    KEY = '101520';

    async collectMails(fromCurrency, toCurrency, key) {
        if (key === this.KEY) {
            const mails = await dbService.getAllData(this.COLLECTION);
            await sendMailsService.sendMail(mails, fromCurrency, toCurrency);
            return 'Mails have been sent by you';
        } else {
            return 'Sorry, we can not sand mails because of mistake in your admin key';
        }

    }

}

module.exports = new CollectMailsService();