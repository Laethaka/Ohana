// var path = require("path");
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    // console.log("LOGGING IN THIS USER", req.body);
    db.User.findOne({//FINDING USER
        where: {
            email: req.body.email
        }
    }).then(function(result) {
        if (result) {//user found
        //   console.log('user found:', result)
            db.Family.findOne({//FINDING FAMILY
                where: {
                    id: result.FamilyId
                }            
            }).then(function(data) {
              console.log('family found!')
              var nickname = data.dataValues.nick_name;
              res.json(nickname)
            })
        } else {
            console.log('user not found!')
        }
    })
});

  app.post("/api/signup", function(req, res) {
    db.User.create({//CREATING ROW IN USERS TABLE
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      zipcode: req.body.zipcode,
      primary_user: req.body.primary_user,
      name: req.body.name,
      FamilyId: req.body.familyId
    }).then(function(results) {//REDIRECT USER TO LOGIN PAGE
        res.json('/api/login');
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  app.get("/logout", function(req, res) {//UNUSED AS OF 6/13 AM
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {//WORKS AS OF 6/13 AM
    if (!req.user) {
      res.json({});
    }
    else {
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });    

  app.post(`/api/user/:username`, function(req,res) {
      db.User.findOne({//FINDING USER
          where: {
              user_name: req.params.username,
          }
      }).then(function(result) {
          if (res) {//user found
              db.Family.findOne({//FINDING FAMILY
                  where: {
                      id: result.FamilyId
                  }            
              }).then(function(data) {
                  var nickname = data.dataValues.nick_name;
                  console.log(nickname);
                  res.redirect("/family/" + nickname);

              })
          } else {
            res.redirect('/')
          }
      })
    })
};
  
    // app.get(`/api/user/:id`, function(req, res) {
    //     db.User.findOne({
    //         where: {
    //             user_name: req.params.id
    //         }
    //     }).then(function(result) {
            // db.Family.findOne({
            //     where: {
            //         id: result.FamilyId
            //     }
    //         }).then(function(result) {
    //             console.log('SENDING TO LANDING WITH', result.dataValues.nick_name)
    //             res.render('pages/landing')
    //         })
    //     })
    // });
