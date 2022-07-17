const {Login} = require('../routes/Login')
const express = require("express")
const Test = express.Router()
module.exports = routesAppend;



function routesAppend(app){

app.use("/login",Login)

}



