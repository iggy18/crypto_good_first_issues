require('dotenv').config()

const axios = require('axios');

const axiosClient = axios.create({
    baseURL: `https://api.github.com`,
    headers: {
        'authorization': `token ${process.env.TOKEN}`,
    }
});

module.exports = {axiosClient};