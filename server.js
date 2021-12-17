//TODOs 
// make a user agent header
// get personal accses token
// set up a simple server
// set up express to serve static files
// test that you can render a page

require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT;

// import axios stuff;
const axios = require('axios');

const axiosClient = axios.create({
    baseURL: `https://api.github.com`,
    headers: {
        'authorization': `token ${process.env.TOKEN}`,
    }
});

// static files
app.use(express.static('public'));

//set up view engine
app.set('view engine', 'ejs')

//import routes
const detailRoute = require('./routes/detail');
const oopsRoute = require('./routes/oops');

//use routes
app.use("/detail", detailRoute);
app.use("/oops", oopsRoute);


// landing page
app.get('/', handleHome);

// constructor functions
function issues(issue){
    console.log(issue);
    this.title = issue.title;
    this.body = issue.body;
    this.url = issue.html_url;
    this.state = issue.state;
    this.repo = issue.repository_url;
}


//handlers
function handleHome(req, res){
    url = `/search/issues?q="substrate"+type:issue+state:open+label:"good first issue"+sort:updated`;
    axiosClient.get(url)
    .then(obj =>{
        let listOfProblems = obj.data.items.map((issue => { 
            return new issues(issue);
        }));
        res.render("home", {issues: listOfProblems});
    })
    .catch(err =>{
        console.log('did not work. errror messge: ' + err);
    })
};

//server
app.listen(port, () =>{
    console.log(`ITS OVER ${port}!`);
});