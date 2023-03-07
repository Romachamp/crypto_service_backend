const axios = require('axios');
const dbService = require('./db.service');

class GetCryptoService {

    cryptoIsCached = false;

    COLLECTION = 'LastCrypto';

    async getCrypto(fromCurrency, toCurrency) {

        let result;

        const coinGeckoList = new Map([
            ["BTC", "bitcoin"],
            ["UAH", "uah"],
            ["ETH", "etherium"]
        ]);

        const binanceList = new Map([
            ['BTC', "BTC"],
            ['UAH', "UAH"],
            ['ETH', "ETH"]
        ]);





        const MILLIS_IN_MINUTE = 5000;
        if (this.cryptoIsCached === true) {
            const response = await dbService.getLastData(this.COLLECTION);
            result = response.mail;
        } else {
            try {
                const requestCoinPair = binanceList.get(fromCurrency) + binanceList.get(toCurrency);
                console.log('From ' + fromCurrency);
                console.log('TO ' + toCurrency);
                console.log(requestCoinPair);

                const req = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${requestCoinPair}`);
                const cryptoPrice = Math.round(Number(req.data.price));
                result = {
                    rate: cryptoPrice.toString()
                }

            } catch {

                const fromRequestCoin = coinGeckoList.get(fromCurrency);
                const toRequestCoin = coinGeckoList.get(toCurrency);
                console.log('From ' + fromRequestCoin)
                console.log('TO ' + toRequestCoin)

                const req = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${fromRequestCoin}&vs_currencies=${toRequestCoin}`);
                console.log(req.data);
                const cryptoPrice = Math.round(Number(req.data[fromRequestCoin][toRequestCoin]));
                result = {
                    rate: cryptoPrice.toString()
                }
            }


            await dbService.saveData(this.COLLECTION, result);
            this.cryptoIsCached = true;

            setTimeout(()=> {
                this.cryptoIsCached = false;
            },20 * MILLIS_IN_MINUTE);
        }



        return result;
    }
}

module.exports = new GetCryptoService();