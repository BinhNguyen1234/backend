const express = require('express');
const Login = express.Router();
const auth = require("./auth")
const writeblog = require("./auth/writeblog")
const session = require("express-session");
const passport = require("passport");


// use session and on auth route
Login.use("/",
session(
    {secret : "secret",
    saveUninitialized: true,
    resave: true}
),

)

Login.use("/auth", auth)



module.exports = Login;