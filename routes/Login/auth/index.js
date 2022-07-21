const auth = require("express").Router()
const loginAuth = require("../../../controller/login/auth")


auth.post("/",
    loginAuth(),
    (req, res)=>{
       
        res.sendStatus(200);
})


module.exports = auth;