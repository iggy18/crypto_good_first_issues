
const { axiosClient } = require("../apiClient.js");

let blockChain = 'substrate';

function getIssues(){
    return axiosClient.get(`/issues?q="${blockChain}"+type:issue+state:open+label:"good first issue"`);
}

module.exports = {getIssues};