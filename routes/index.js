const {Login} = require('../routes/Login')

module.exports = routesAppend;
function routesAppend(app){

app.use("/login",Login)
 

}

