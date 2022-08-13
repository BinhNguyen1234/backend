
const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username : {type: String, require: true},
    password: {type: String, require: true},
    date : Date,
    post: [{type: mongoose.Schema.Types.ObjectId}]

})
module.exports = mongoose.model('user', userSchema, 'User')