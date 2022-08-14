const express = require('express');
const app = express();
const routesAppend = require("./routes/")
const bodyParser = require("body-parser")
const PORT = 2000;
const staticServer = require('serve-static')
const cookie = require('cookie-parser')
const session = require("express-session")
const Database = require("./config/Database")


/** init app */



//** Middle ware */

app.use(express.static('build/teeblog/build'))


const cors = require('cors')
app.use(cors())

Database.connect('binhnguyen','170116Abc','Blog')
//-- limit 16mb for document in mongodb
app.use(bodyParser.json({limit: '15mb'}));
app.use(bodyParser.urlencoded({limit: '15mb', extended: true}));
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT} \n -------------------- `);
})
//--- 
routesAppend(app)

