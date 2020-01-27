
//contains two routes:

    //A GET route with the url `/api/friends` - displays JSON of all possible friends.
    //A POST routes `/api/friends` - handles incoming survey results. 
        //This route will also be used to handle the compatibility logic.

// //load data: 
// var applicantData = require('../data/friends'); 

// //routing: 
// module.exports = function(app) { 

//     //API GET request: 
//     app.get('/api/friends', function(req, res) { 
//         res.json(applicantData); 
//     }); 

//     //API POST request to submit data to the server:
//     app.post('/api/tables', function(req, res) { 
        
//         if (applicantData < 5) { 
//             applicantData.push(req.body); 
//             res.json(true); 
//         }
//     }); 

    //clearing out if needed:
    

// }