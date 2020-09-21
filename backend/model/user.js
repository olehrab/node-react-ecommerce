const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    name:{
        type:String
    },
    email: {
        type: String,
        required : [true, "Email not found"],
        unique: [true,"Email is already registered"],
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    password:{
        type:String,
        minlength: 6,
        required:true
    },
    phonenumber: {
        type: String,
       unique: true,
        minlength: 8,
        maxlength: 12,
        match: /^[0-9]\d{8,12}$/,
        required: [true,"Phonenumber is required"],
      },
      role: {
        type: String,
        default: "Customer",
        required: true,
      },
      user_status: {
        type: String,
        enum: ["active", "inactive", "block"],
        default: "inactive",
        // required: true,
      },
})

module.exports = mongoose.model('user',userSchema)