//import defaine
const express = require('express');
// import    express from 'express'
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')
const mongoose = require('mongoose')
const flash = require('connect-flash');
const session = require('express-session')
const cookieParser = require('cookie-parser')

//moldel
const User1_route = require('./app/route/route.user1')


require('dotenv').config()
const app = express();
app.use(logger('dev'))

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

//connect db
mongoose.connect(
    'mongodb+srv://admin:'+process.env.PASSWORD+'@cluster0-nh64w.mongodb.net/test?retryWrites=true&w=majority',{
        useNewUrlParser:true
    },()=>console.log('ket noi thanh cong')
)

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use('/user',User1_route)
// app.use(cookieParser());
// app.use(session({
//     secret:"TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX",
//     resave:true,
//     saveUninitialized:true
// }))
// app.use(flash());
//middware


app.get('/',(req,res,next)=>{
    res.status(200).json({messsage:"ddjjdj"})
})

app.use((req,res,next)=>{
    const err = new Error('not found');
    err.status = 404;
    next(err)
});
app.use((req,res,next)=>{
    const err = app.get('env') === 'development' ? err : {}
    const status = err.status || 500;
    res.status(status).send({err})
})
// const route_user = require('./app/route/route.user');

// app.use(route_user);


module.exports = app