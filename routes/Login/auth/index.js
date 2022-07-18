const auth = require("express").Router()
const loginAuth = require("../../../controller/login/auth")
const session = require("express-session");
const passport = require("passport")

auth.post("/",
    // init session for login
    //init passport session for login 
    // passport.initialize(),// passport for login
    // passport.session(),
    loginAuth(),
    (req, res)=>{
       
        res.sendStatus(200);
})


module.exports = auth;