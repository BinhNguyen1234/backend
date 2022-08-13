const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require("../../../model/user")

function loginAuth(){

    passport.serializeUser(({username, password}, setToSessionCb)=>{
        return setToSessionCb(null,{username, password});
    })

    

   return function (req, res , next){   
    // passport.initialize()(req,res,next)//init passport for login
    passport.use( new LocalStrategy( (username,password, passToSerialUserCb)=>{
        console.log(`client (username "${username}") try to auth`)
        const Result = new Promise((resolve, reject)=>{
            User.findOne({"username":username},(err,sucess)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(sucess)
                }
            })
        }) 
        return Result.catch((err)=>{
            console.log("Error when login")
            console.log(err)
                    })
            .then((sucess)=>{
                if(!sucess){
                    return passToSerialUserCb(null,false)
                }
                if(password == sucess.password){
                    return passToSerialUserCb(null,{username, password, message: "Verified"})
                }
                else{
                    return passToSerialUserCb(null,false)
                }
            })
            //-------------hard code for username and password

            // if(username ==='admin' && password === '4fd6c0dfcac719f96423f3de90d0ab72de4534f62c51cccc94cdcb787cec07da'){
            //     return passToSerialUserCb(null,{username, password, message: "Verified"})
            // }
            // else {
            //     return passToSerialUserCb(null,false)
            // }
        }))

    //--- pass to session after authe succed
   
    passport.authenticate('local')(req,res,next)
}
}

module.exports = loginAuth;



