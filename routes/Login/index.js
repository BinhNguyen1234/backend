const express = require('express');
const Login = express.Router();
const auth = require("./auth")
const writeblog = require("./auth/writeblog")
const session = require("express-session");
const passport = require("passport");


//-- use middleware on root

// Login.use(session(
//     {secret : "secret",
//     saveUninitialized: true,
//     resave: true}
//     ),// init session for login
//     passport.initialize(),//init passport for login
//     passport.session()//init passport session for login 

//     );

//-------------- set sub router on login
Login.use("/",
session(
    {secret : "secret",
    saveUninitialized: true,
    resave: true}
),

)

Login.use("/auth", auth)



module.exports = Login;