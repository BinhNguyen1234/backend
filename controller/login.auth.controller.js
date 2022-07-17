const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');


function loginAuth(req, res , next){
    //--- Strategy for auth
    passport.use( new LocalStrategy((username,password, passToSerial)=>{
        console.log("client try to auth")
        console.log(username, password)
        if(username ==='admin' && password === '170116Abc'){
            return passToSerial(null,{username, password, message: "Verified"})
        }
        else {
            return passToSerial(true, false)
        }
    }))

    //--- pass to session after authe succed
    passport.serializeUser(({username, password}, setToSession)=>{
        return setToSession(null,{username, password});
    })
    passport.authenticate('local')(req,res,next)
}

module.exports = loginAuth;



