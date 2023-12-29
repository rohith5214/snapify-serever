const posts = require('../Models/postSchema')

exports.addPosts = async(req,res)=>{
    console.log("inside addpost function");
    const userId = req.payload
    const postImage = req.file.filename
    const {caption} = req.body
    try{
        const existingUser = await posts.findOne({caption})
        if(existingUser){
            res.status(406).json("Post already existing...please make another post")
        }else{
            const newPost = new posts({
                caption,postImage,userId
            })
            await newPost.save()
            res.status(200).json(newPost)
        }
        
    }catch(err){
        res.status(401).json(err)
    }

}

exports.getAllPosts = async (req,res)=>{
    try{
        const allPosts = await posts.find()
        res.status(200).json(allPosts)
    }catch(err){
        res.status(401).json(err)

    }
}

exports.getuserPosts = async (req,res)=>{
    const userId = req.payload
    try{
        const userPosts = await posts.find({userId})
        res.status(200).json(userPosts)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.deleteUserPosts = async (req,res)=>{
    const {id} = req.params
    try{
        const removePost = await posts.findByIdAndDelete({_id:id})
        res.status(200).json(removePost)
    }catch(error){
        res.status(401).json(error)
    }
}