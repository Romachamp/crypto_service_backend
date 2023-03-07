const dbService = require('./db.service');
const mailCheckService = require('./mailCheck.service');

class RegisterService {
    async register(mail, password) {
        const user = {
            mail: mail,
            password: password
        }
        console.log(user);
        console.log(await dbService.isUserExists(user));
         if (await dbService.isUserExists(user) === false) {
             if (mailCheckService.checkMail(mail) === true) {
                 if (mailCheckService.checkPassword(password) === true) {
                     await dbService.saveData('Users', user);
                     return 'You have been registered';
                 } else {
                     return 'Your password is incorrect.'
                 }
             } else {
                 return 'Your mail is incorrect.'
             }
         } else {
             return 'User already exists';
         }
    }
}

module.exports = new RegisterService();