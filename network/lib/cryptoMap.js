const { coinmarketClient } = require("../coinmarketClient.js");


function getTopCryptoNames(){
    return coinmarketClient.get(`/cryptocurrency/map?limit=50`);
}

module.exports = {getTopCryptoNames};