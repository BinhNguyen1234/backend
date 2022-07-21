const passport = require('passport');
const LocalStrategy = require('passport-local');


function loginAuth(){

    passport.serializeUser(({username, password}, setToSessionCb)=>{
        return setToSessionCb(null,{username, password});
    })

    

   return function (req, res , next){   
    // passport.initialize()(req,res,next)//init passport for login
    passport.use( new LocalStrategy((username,password, passToSerialUserCb)=>{
        console.log(`client (username "${username}") try to auth`)
    
        if(username ==='admin' && password === '170116Abc'){
            return passToSerialUserCb(null,{username, password, message: "Verified"})
        }
        else {
            return passToSerialUserCb(null,false)
        }
    }))

    //--- pass to session after authe succed
   
    passport.authenticate('local')(req,res,next)
}
}

module.exports = loginAuth;



