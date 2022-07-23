const LogOut = require("express").Router()
const handleLogOut = require("../../../../controller/login/logout")
const isAuth = require("../../../../middleware/login/isAuth")

LogOut.post("/",isAuth(),handleLogOut,(req,res)=>{
    
})

module.exports = LogOut