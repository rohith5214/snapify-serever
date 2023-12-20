const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    caption:{
        type:String,

    },
    postImage:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true

    }
})

const posts = mongoose.model("posts",postSchema)
module.exports = posts