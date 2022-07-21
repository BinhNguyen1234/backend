const writeblog = require('express').Router()
const isAuth = require("../../../middleware/login/isAuth")
const passport = require('passport');


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
writeblog.use("/",isAuth(), (req,res)=>{
    console.log(req.user);
}); 
// writeblog.all("/",(req,res)=>{
//     res.send("Ok")
// })

module.exports = writeblog