// var path = require("path");
var db = require("../models");

module.exports = function(app) {

    app.post(`/api/user/`, function(req,res) {
        console.log("HERE IT IS", req.body);
        db.User.findOne({//FINDING USER
            where: {
                user_name: req.body.username,
                user_password: req.body.password
            }
        }).then(function(result) {
            if (result) {//user found
                db.Family.findOne({//FINDING FAMILY
                    where: {
                        id: result.FamilyId
                    }            
                }).then(function(result) {
                    console.log(result.dataValues.nick_name);
                    res.redirect(`/family/${result.dataValues.nick_name}`)
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
