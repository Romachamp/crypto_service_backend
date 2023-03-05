const nodemailer = require('nodemailer');
const getCryptoService = require('./getCrypto.service');

class SendMailsService {
    async sendMail(mails, fromCurrency, toCurrency) {

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "3b5be5f3748e88",
                pass: "44154f22845f91"
            }
        });

        const cryptoReq = await getCryptoService.getCrypto(fromCurrency, toCurrency);
        const cryptoCourse = cryptoReq.rate;

        //
        // const transport = nodemailer.createTransport({
        //     host: "smtp-relay.sendinblue.com",
        //     port: 587,
        //     auth: {
        //         user: "palchyk.roman@gmail.com",
        //         pass: "jH5KGxvXfPVkmh0y"
        //     }
        // });

        const htmlGreeting = `<h1>New Crypto Course!<h1/>`
        const htmlText = `<p style="font-family: sans-serif; font-size: 18px;">We have new crypto course for you!
        ${'Current rate '+ fromCurrency + '/' + toCurrency + ' is ' + cryptoCourse}
`

        let testEmail;

        // for (let mailsIndex = 0; mailsIndex < mails.length; mailsIndex++) {
            testEmail = {
                from: "palchyk.roman@gmail.com",
                to: mails,
                subject: 'New Crypto Course',
                // text: "Hello!",
                html: htmlGreeting + '\n' + htmlText
            };
        // }


        async function send() {
            const result = await transport.sendMail(testEmail);
            console.log(result);
        }

        await send();

    }
}

module.exports = new SendMailsService();