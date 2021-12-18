require('dotenv').config()

const axios = require('axios');

const marketcapClient = axios.create({
    baseURL: `https://pro-api.coinmarketcap.com/v1`,
    headers: {
        'X-CMC_PRO_API_KEY': `${process.env.COINTOKEN}`,
    }
});

module.exports = {marketcapClient};