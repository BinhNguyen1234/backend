const WriteBlog = require('express').Router()
const isAuth = require("../../../../middleware/login/isAuth")
const passport = require('passport');



WriteBlog.post("/",isAuth(), (req,res)=>{
    res.status(200).send("xac thuc thanh cong")
}); 
WriteBlog.post("/post",isAuth(),(req,res)=>{
    console.log(req.user.username + " post blog")
    console.log(req.body);
    res.sendStatus(200)
})

module.exports = WriteBlog