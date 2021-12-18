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

//import axios endpoints?
const  gitHub = require('./network/lib/issues.js');

// const axiosClient = axios.create({
//     baseURL: `https://api.github.com`,
//     headers: {
//         'authorization': `token ${process.env.TOKEN}`,
//     }
// });

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

function mapResponseToConstructor(obj, constructor){
    let body = obj.data.items
    
    if( constructor === 'issues'){
        let listOfProblems = body.map((issue => {
            return new issues(issue);
        }));
        return listOfProblems;
    } else{
        console.log('error: mapResponseToConstructor did not work');
    }
}


//handlers
function handleHome(req, res){
    gitHub.getIssues()
    .then(obj =>{    
        let listOfProblems = mapResponseToConstructor(obj, 'issues');
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