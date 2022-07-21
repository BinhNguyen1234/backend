const passport = require('passport');



function  isAuth(){

   passport.deserializeUser((user,done)=>{
    if(user.username === "admin" && user.password==="170116Abc"){
       
        done(null, user)
    }
    else{
        
        done(true, false)
    }
   })
   
    
   return function(req, res, next){ 
    
        passport.initialize()(req, res , ()=>{
            passport.session()(req,res,next)
        })
    
        
        
        
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