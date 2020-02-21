//Dependencies:
var express = require("express");
var path = require("path"); 

var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;


// Set Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public')); 

require("./routes/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
