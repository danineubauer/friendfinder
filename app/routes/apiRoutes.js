
const friends = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    console.log('displaying friends data')
    res.json(friends);
  });

  app.get('/api/friends/match', function (req, res) {
    res.json(friends);
  })

  app.post('/api/friends', function (req, res) {
    console.log('adding new friend to friends array')
    friends.push(req.body);
    res.json(true);
    console.log(friends)
  })
}


