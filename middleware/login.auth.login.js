const passport = require("passport")
const LocalStrategy = require("passport-local");
passport.use( new LocalStrategy((username , password, done)=>{
    if(username === "admin" && password === "admin"){
        done(null, {username, password})
    }
}
))