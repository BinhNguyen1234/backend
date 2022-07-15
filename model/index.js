const mongoose = require('mongoose');

/** 
Create an document base on model and write into DB
* 
*/
async function mongooseHandle(ModelMongoose,object){
    mongoose.connect(
     "mongodb+srv://binhnguyen:170116Abc@cluster0.y1plb.mongodb.net/?retryWrites=true&w=majority",
     {dbName:"Blog"}
    )
    .then(async (mongoose)=>{
        console.log("connect sucess")
        const document = new ModelMongoose(object);
        await document.save()
        console.log("put sucess");
        return mongoose.disconnect()
        
    })
    .then(()=>{
        console.log("disconnect from db")
    })
    .catch((err)=>{
        console.log(err);
    })
    
}
const usersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type : String, unique: true},
    password: {type: String},
    
    // token : {type: String, require: true},
    // create: {type: Date, default: Date.now}

})
const User = mongoose.model("customer",usersSchema)

const usDoc = new User ({
    _id : new mongoose.Types.ObjectId(),
    username : "binh",
    password: "12345",
})
mongooseHandle(User, usDoc)