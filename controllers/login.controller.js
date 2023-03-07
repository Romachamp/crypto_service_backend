const loginService = require('../services/login.service');

class LoginController {
    async login(req, res) {
        const mail = req.query.mail;
        const password = req.query.password;
        res.send(await loginService.login(mail, password));
    }
}

module.exports = new LoginController();