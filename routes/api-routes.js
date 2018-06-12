// var path = require("path");
var db = require("../models");

module.exports = function(app) {

    app.post(`/api/user/:username`, function(req,res) {
        console.log("HERE IT IS", req.params.username);
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
                console.log('user not found!')
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
