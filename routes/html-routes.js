var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  // Login/Index Page
  app.get("/", function(req, res) {
    if (req.user) {//SENDING TO FAMILY DASHBOARD
      res.render('pages/dashboard')
    }
    res.render('pages/landing');
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.render('pages/dashboard')
    }
    res.render('pages/index');
  });

  app.get("/register", function(req, res) {
    if (req.user) {
      res.render('pages/dashboard', {
        famName: famName
      })
    }
    res.render('pages/register');
  });

  // app.get("/family/:nickname", function(req, res) {
  //   var famName = req.params.nickname;
  //   console.log("famName " + famName);
  //   res.render('../views/pages/family',{
  //     famName: famName
  //   });
  // });

  
  // Family Dashboard Page 
  app.get('/dashboard/:nickname', function(req, res) {
    res.render('pages/dashboard',
    {
      famName: req.params.nickname
    });
  });

  // // Registration Page
  // app.get('/register', function(req, res) {
  //   res.render('../views/pages/register');
  // });

};
