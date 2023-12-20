const mongoose = require('mongoose')
const validator = require('validator')

const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:[3,'must be atleast 3,got {VALUE}']
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email!!!")
           }
        }
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type:String,
    },
    otherlinks:{
        type:String
    },
    profile:{
        type:String
    }
})

const users = mongoose.model("users",userschema)
module.exports = users