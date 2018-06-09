var express = require("express");
var bodyParser = require("body-parser");
// Requiring passport as we've configured it
var passport = require("./config/passport");

var app = express();
var PORT = process.env.PORT || 3344;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);

// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);
  
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});