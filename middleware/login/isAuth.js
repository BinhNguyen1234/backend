const passport = require('passport');



function  isAuth(){

   passport.deserializeUser(({username , password}, done)=>{
    console.log(username)
    console.log(password)
    if(username === "admin", password ==="170116Abc"){
        console.log("desireal")
        done(null,{username,password})
        
    }
    else {
        done(true, false)
    }
})
    
   return function(req, res, next){ 
        console.log(req.session)
        // passport.deserializeUser(({username , password}, done)=>{
            
        //     if(username === "admin", password ==="170116Abc"){
        //         console.log("desireal")
        //         done(null,{username,password})
                
        //     }
        //     else {
        //         done(true, false)
        //     }
        // })
        passport.initialize()(req, res , next)
        passport.session()(req, res , next)
        // passport.deserializeUser(({username , password}, done)=>{
        //     console.log("desireal")
        //     if(username === "admin", password ==="170116Abc"){
        //         console.log("desireal")
        //         done(null,{username,password})
                
        //     }
        //     else {
        //         done(true, false)
        //     }
        // })
        
        
    } 
}


module.exports = isAuth;