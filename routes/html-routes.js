var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render('pages/index');
  });

  app.get("/family/:nickname", function(req, res) {
    res.render('pages/landing', {
      famName: req.params.nickname
    });
  });

};
  
