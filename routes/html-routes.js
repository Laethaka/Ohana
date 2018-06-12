var path = require("path");

module.exports = function(app) {

  // use res.render to load up an ejs view file
  // Login/Index Page

  // Family Dashboard Page 
  app.get('/dashboard', function(req, res) {
    res.render('pages/dashboard');
  });

  // Registration Page
  app.get('/register', function(req, res) {
    res.render('pages/register');
  });

  // Landing Page 
  app.get('/landing', function(req, res) {
    res.render('pages/landing');
  });

  // Index Page (login)
  app.get('/index', function(req, res) {
    res.render('pages/index');
  });

};