
const friends = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    console.log('displaying friends data')
    res.json(friends);
  });

  app.get('/api/friends/match', function (req, res) {
    console.log('calculating match')
    let lastFriend = friends.slice(-1)
    const calcOne = [];
    let addition = 0;
    const calcTwo = [];
    for (i = 0; i < friends.length - 1; i++) {
        for (t = 0; t < friends[i].scores.length; t++) {
            calcOne.push(Math.abs(parseInt(friends[i].scores[t]) - parseInt(lastFriend[0].scores[t])));
        };
        for (x = 0; x < calcOne.length; x++) {
            addition += calcOne[x];
        };
        calcTwo.push(addition);
        calcOne.length = 0;
        addition = 0;
    };
    let minIndex = calcTwo.indexOf(Math.min(...calcTwo));
    const match = [{ name: friends[minIndex].name, photo: friends[minIndex].photo }];
    calcTwo.length = 0;
    res.json(match);
  })

  app.post('/api/friends', function (req, res) {
    console.log('adding new friend to friends array')
    friends.push(req.body);
    res.json(true);
    console.log(friends)
  })
}


