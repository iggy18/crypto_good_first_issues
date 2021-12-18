require('dotenv').config()

const axios = require('axios');

const gitHubClient = axios.create({
    baseURL: `https://api.github.com`,
    headers: {
        'authorization': `token ${process.env.GITTOKEN}`,
    }
});

module.exports = {gitHubClient};