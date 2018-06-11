var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 3344;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);
  
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on http://localhost:" + PORT);
  });
});