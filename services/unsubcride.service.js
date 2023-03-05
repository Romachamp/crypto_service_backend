const dbService = require('./db.service');

class UnsubcrideService {
    COLLECTION = 'Crypto';

    async unsubcride(mail) {
        if (await dbService.isDataExists(mail, this.COLLECTION) === true) {
            await dbService.deleteData(mail, this.COLLECTION);
            return 'You successfully unsubcrided';
        } else {
            return 'We do not have user with this email. So you are not subcrided.'
        }
    }
}

module.exports = new UnsubcrideService();