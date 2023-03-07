const dbService = require('./db.service');


class LoginService {
    async login(mail, password) {
        const user = {
            mail: mail,
            password: password
        }
        if (await dbService.isUserExists(user) === false) {
            return 'You have login';
        } else {
            return 'We do not have such a user';
        }
    }
}

module.exports = new LoginService();