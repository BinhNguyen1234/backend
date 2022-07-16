const express = require('express');
const Login = express.Router();


//----
const session = require("express-session");
const passport = require("passport")
const LocalStrategy = require("passport-local");
Login.use(session(
    {secret : "secret",
    saveUninitialized: true,
    resave: true}
))


Login.use(passport.initialize())
passport.serializeUser((user, done)=>{
    console.log("serial",user);

    done(null, user)
});
passport.deserializeUser((user,done)=>{
    console.log("deserial",user)
    done(null, user)
})
passport.use( new LocalStrategy((username , password, done)=>{
    if(username === "admin" && password === "admin"){
        console.log(username, password)
         return done(null, {username, password})
        
    }else{
        return done(null,false)
    }
    
}
))


//--
Login.all("/l",(req,res)=>{
    console.log("User l",req.session.passport)
    })
Login.all("/auth",passport.authenticate('local'),(req,res)=>{
    console.log("User",req.session.passport.user)
        res.sendStatus(200);
    })

module.exports = {Login};