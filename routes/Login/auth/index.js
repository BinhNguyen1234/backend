const auth = require("express").Router()
const loginAuth = require("../../../controller/login/auth")
const WriteBLog = require("./writeblog")
const LogOut =  require("./logout")

auth.post("/",
    loginAuth(),
    (req, res)=>{
       
        res.sendStatus(200);
})
auth.use("/writeblog",WriteBLog)
auth.use("/logout",LogOut)


module.exports = auth;