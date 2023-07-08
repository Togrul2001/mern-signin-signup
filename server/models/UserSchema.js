const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    _id : {
        type: String,
    },
    fullname : {
        type: String,
        required: false,
        unique: false,
    },
    email : {
        type: String,
        required: true,
        unique:true
    },
    password : {
        type: String,
        required: true,
        unique: false
    }
})


const Users = mongoose.model('Users', UserSchema)

module.exports = Users