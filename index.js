const express = require('express');
const app = express();
const routesAppend = require("./routes/")
const bodyParser = require("body-parser")
const User = require("./model/model/User")
const PORT = 2000;
const cookie = require('cookie-parser')



/** init app */



//** Middle ware */
app.use(express.static("build"))
app.use(cookie())
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json());
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT} \n -------------------- `);
})
//--- 
routesAppend(app)

