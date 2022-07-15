const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type : String, unique: true},
    password: {type: String},
    
    // token : {type: String, require: true},
    // create: {type: Date, default: Date.now}

})
 const blogSchema = mongoose.Schema({
    _id,
    url: {type: String, unique : true},
    title: {type: String, unique: true},
    content: {type: String},
    image: {type: Buffer}
 })
module.exports = {
    usersSchema
}