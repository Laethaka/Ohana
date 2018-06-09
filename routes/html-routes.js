var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/landing", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/landing.html"));
    });

  };
  
