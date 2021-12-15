//TODOs 
// make a user agent header
// get personal accses token
// set up a simple server
// set up express to serve static files
// test that you can render a page

const express = require('express');
const app = express();
const port =3000;


// static files
app.use(express.static('public'));

//set up view engine
app.set('view engine', 'ejs')

//import routes
const detailRoute = require('./routes/detail');

//use routes
app.use("/detail", detailRoute);

//app.use(express.static('public'));


// landing page
app.get('/', (req, res) => {
    res.render("home");
});


app.listen(port, () =>{
    console.log(`ITS OVER ${port}!`);
});