const {Login} = require("../routes/Login/index")
const passport  = require('passport-local');

Login.route("/auth",(req,res)=>{
    res.send("aaaa")
})