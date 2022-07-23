




function handleLogOut (req,res, next){
    req.logOut((err)=>{
        if(err){
            console.log("co loi khi xac minh")
        }
        else{
            res.status(200).send("Log out thanh cong")
            
        }
    })
}

module.exports = handleLogOut;