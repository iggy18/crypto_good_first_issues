const construct = require("./constructors.js");

function mapResponseToConstructor(obj, constructor){
    let body = obj.data.items
    
    if( constructor === 'issues'){
        let listOfProblems = body.map((issue => {
            return new construct.issues(issue);
        }));
        return listOfProblems;
    } else{
        console.log('error: mapResponseToConstructor did not work');
    }
}

exports.mapResponseToConstructor = mapResponseToConstructor;