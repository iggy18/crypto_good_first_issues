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

//import axios endpoints?
const  gitHub = require('./network/lib/issues.js');

// static files
app.use(express.static('public'));

//set up view engine
app.set('view engine', 'ejs')

//import routes
const detailRoute = require('./routes/detail');
const oopsRoute = require('./routes/oops');

// import handlers

//import helpers
const helpers = require('./helper/helpers.js');

//use routes
app.use("/detail", detailRoute);
app.use("/oops", oopsRoute);


// landing page
app.get('/', handleHome);

//handlers
function handleHome(req, res){
    gitHub.getIssues()
    .then(obj =>{    
        let listOfProblems = helpers.mapResponseToConstructor(obj, 'issues');
        res.render("home", {issues: listOfProblems});
    })
    .catch(err =>{
        console.trace('did not work. errror messge: ' + err);
    })
};

//server
app.listen(port, () =>{
    console.log(`ITS OVER ${port}!`);
});