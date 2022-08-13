const WriteBlog = require('express').Router()
const isAuth = require("../../../../middleware/login/isAuth")
const passport = require('passport');
const postBlog = require('../../../../controller/login/auth/writeblog/index')



WriteBlog.post("/",isAuth(), (req,res)=>{
    res.status(200).send("xac thuc thanh cong")
}); 
WriteBlog.post("/post",isAuth(),postBlog)

module.exports = WriteBlog