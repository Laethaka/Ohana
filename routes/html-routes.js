var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  // use res.render to load up an ejs view file
  // Login/Index Page
  app.get("/", function(req, res) {
    if (req.user) {
      res.render('pages/dashboard')
      console.log('homepage hit with user!')
    }
    res.render('pages/landing');
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
  app.get('/dashboard/:nickname', function(req, res) {
    res.render('../views/pages/dashboard',
    {
      famName: req.params.nickname
    });
  });

  // Registration Page
  app.get('/register', function(req, res) {
    res.render('../views/pages/register');
  });

};
