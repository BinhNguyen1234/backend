const express = require('express');
const app = express();
const routesAppend = require("./routes/")
const passport = require ('passport')
var session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const bodyParser = require("body-parser")
const User = require("./model/model/User")
const PORT = 2000;





/** init app */



//** Middle ware */
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json());
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})
//--- 
routesAppend(app)

