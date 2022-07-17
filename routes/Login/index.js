const express = require('express');
const Login = express.Router();
const auth = require('./auth')
const loginAuth = require("../../controller/login.auth.controller")
const session = require("express-session");
const passport = require("passport")

//-- use middleware on root

Login.use(session(
    {secret : "secret",
    saveUninitialized: true,
    resave: true}
    ),// init session for login
    passport.initialize(),//init passport for login
    passport.session()//init passport session for login 

    );

//-------------- set sub router on login
Login.use("/auth", auth)





// Login.post("/auth",loginAuth,
    
//     (req,res)=>{
//         console.log(req.user);
//         console.log(req.session);
//         res.cookie("binh","12345",{domain:"127.0.0.1:3000"})
//         res.sendStatus(200);
//     })


// Login.get("/auth",(req,res)=>{
//     console.log(req.session)
// })
// // Auth.post(passport.authenticate('local'),(req,res)=>{
// //     console.log(req.session);
// //     res.sendStatus(200);
// // })




//--


module.exports = Login;