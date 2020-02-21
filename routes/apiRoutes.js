

var friendsList = require("../app/data/friends");

//routing
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

  app.post("/api/friends", function(req, res) { 
    if (friendsList.length <3 ) { 
      friendsList.push(req.body); 
      res.json(true); 
    }
    else { 
      friendsList.push(req.body)
      res.json(false);
    }
  })

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
