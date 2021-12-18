const { gitHubClient } = require("../gitHubClient.js");

let blockChain = 'substrate';

function getIssues(){
    return gitHubClient.get(`/search/issues?q="${blockChain}"+type:issue+state:open+label:"good first issue"`);
}

exports.getIssues = getIssues;