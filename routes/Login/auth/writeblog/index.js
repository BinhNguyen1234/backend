const WriteBlog = require('express').Router()
const isAuth = require("../../../../middleware/login/isAuth")
const passport = require('passport');



WriteBlog.post("/",isAuth(), (req,res)=>{
    res.status(200).send("xac thuc thanh cong")
}); 


module.exports = WriteBlog