var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  // use res.render to load up an ejs view file
  // Login/Index Page
  app.get("/", function(req, res) {
    if (req.user) {
      res.render('pages/family')
      console.log('homepage hit with user!')
    }
    res.render('pages/index');
    console.log('homepage hit without user!')
  });

  app.get("/register", function(req, res) {
    if (req.user) {
      res.render('../views/pages/family', {
        famName: famName
      })
    }
    res.render('pages/register');
  });

  app.get("/family/:nickname", function(req, res) {
    var famName = req.params.nickname;
    console.log("famName " + famName);
    res.render('../views/pages/family',{
      famName: famName
    });
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
