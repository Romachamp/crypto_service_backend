const checkService = require('./mailCheck.service');
const dbService = require('./db.service');

class SubcrideService {
    COLLECTION = 'Crypto';

    async subcride(mail) {
        if (checkService.checkMail(mail) === true) {
            if (await dbService.isDataExists(mail, this.COLLECTION) === true) {
                return 'Sorry, we already have the same user'
            } else {
                await dbService.saveData(this.COLLECTION, mail);
                return 'You successfully subscribed';
            }
        } else {
            return 'Sorry, your mail does not follow the rules. Change it according to our rules';
        }
    }
}

module.exports = new SubcrideService();