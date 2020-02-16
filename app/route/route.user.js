const express = require('express');
const route = express();
// const user_controller = require('../controller/controller.user');
// const user_model = require('../model/model.user');

// route.use((req,res,next)=>{
//     res.locals.currentUser = req.user;
//     res.locals.errors = req.flash('error');
//     res.locals.infos = req.flash("info")
//     next()
// })
route.get("/",(req,res,next)=>{
      res.status(200).json("kdkkd")
    // user_model.find()
    // .sort({createdAt:"descending"})
    // .exec((err,users)=>{
    //     if(err){return next(err)}
    //     res.render("index",{users:users});
    // })
})

module.exports = route