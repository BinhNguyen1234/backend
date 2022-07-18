const writeblog = require('express').Router()
const isAuth = require("../../../middleware/login/isAuth")
const passport = require('passport');
const session = require('express-session');

// passport.deserializeUser(({username , password}, done)=>{
//     console.log("desireal")
//     if(username === "admin", password ==="170116Abc"){
//         console.log("desireal")
//         done(null,{username,password})
        
//     }
//     else {
//         done(true, false)
//     }
// })
writeblog.all("",isAuth(), 
    // passport.initialize(),  
    // passport.session(),
    
(req,res)=>{
    // console.log(req.session)
    console.log(req.user);
    res.send("done")
}); 
// writeblog.all("/",(req,res)=>{
//     res.send("Ok")
// })

module.exports = writeblog