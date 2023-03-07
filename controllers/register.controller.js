const registerService = require('../services/register.service');

class RegisterController {
    async register(req, res) {
        const mail = req.query.mail;
        const password = req.query.password;
        res.send(await registerService.register(mail, password));
    }
}

module.exports = new RegisterController();