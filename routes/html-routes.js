var path = require("path");

module.exports = function(app) {

  // use res.render to load up an ejs view file
  // Login/Index Page
  app.get("/", function(req, res) {
    res.render('../views/pages/index');
  });

  app.get("/landing", function(req, res) {
    res.render('../views/pages/landing');
  });

  // app.get("/family/:nickname", function(req, res) {
  //   res.render('pages/landing'
  //   , {
  //     famName: req.params.nickname
  //   });
  // });
  
  // Family Dashboard Page 
  app.get('/dashboard', function(req, res) {
    res.render('../views/pages/dashboard');
  });

  // Registration Page
  app.get('/register', function(req, res) {
    res.render('../views/pages/register');
  });

  // Landing Page 
  app.get('/landing', function(req, res) {
    res.render('../views/pages/landing');
  });

};
