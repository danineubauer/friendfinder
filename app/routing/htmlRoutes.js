
//require path to get file path for html:
var path = require('path'); 

//routing: 

module.exports = function(app) { 
    
    //GET route to '/survey' - displays survey page: 
    app.get('/survey', function(req, res) { 
        res.sendFile(path.join(__dirname, '../public/survey.html')); 
    }); 

    //default - catch-all route leading to home page: 
    app.get('*', function(req, res) { 
        res.sendFile(path.join(__dirname, '../public/home.html')); 
    }); 
    
}; 

