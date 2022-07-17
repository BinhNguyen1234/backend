const express = require('express');
const Login = express.Router();
const Auth = express.Router();

//----
const session = require("express-session");
const { authenticate } = require('passport');
const passport = require("passport")
const LocalStrategy = require("passport-local");
Login.use(session(
    {secret : "secret",
    saveUninitialized: true,
    resave: true}
))
// Login.use("/auth", Auth)
Login.use("/",passport.initialize(),passport.session());

Login.get("/test/",(req,res)=>{
    
    console.log(req.user)
    res.send("test");
})
passport.serializeUser(({username,password,message} ,done)=>{
    console.log("----------------serial\n",username);
    console.log(password)
    console.log(message);
    return done(null, {username, password})
});
passport.deserializeUser((user,password,done)=>{
    console.log("----------- deserial\n",password)
    done(null, {user,password})
})

passport.use( new LocalStrategy((username , password, done)=>{
    if(username === "admin" && password === "170116Abc"){
        const result = {username, password, message: "verified"}
         done(null, result)
        
    }else{
         done(null,false,"Not verified")
    }
    
}
))
Login.post("/auth",passport.authenticate('local'),
    
    (req,res)=>{
        console.log(req.user);
        console.log(req.session);
        res.cookie("binh","12345",{domain:"127.0.0.1:3000"})
        res.sendStatus(200);
    })
Login.all("/auth/l/",(req ,res)=>{
    console.log(" --------------- l session\n",req.session);
    res.send("OK")
})

// Login.get("/auth",(req,res)=>{
//     console.log(req.session)
// })
// // Auth.post(passport.authenticate('local'),(req,res)=>{
// //     console.log(req.session);
// //     res.sendStatus(200);
// // })




//--


module.exports = {Login};