//constructor function for use in map on helpers.js

function issues(issue){
    console.log(issue);
    this.title = issue.title;
    this.body = issue.body;
    this.url = issue.html_url;
    this.state = issue.state;
    this.repo = issue.repository_url;
}

exports.issues = issues;