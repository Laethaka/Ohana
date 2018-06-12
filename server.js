var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");


var app = express();
var PORT = process.env.PORT || 3344;

var db = require("./models");
var passport = require("./config/passport");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);
  
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on http://localhost:" + PORT);
  });
});