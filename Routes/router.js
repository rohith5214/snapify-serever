const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')
const postController = require('../Controllers/postController')
const multerConfig = require('../Middleware/multerMiddleware')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
router.post('/user/register',userController.register)
router.post('/user/login',userController.login)
router.post('/post/add',jwtMiddleware,multerConfig.single('postImage'),postController.addPosts)
router.get('/user/user-posts',jwtMiddleware,postController.getuserPosts)
router.delete('/user/remove/:id',jwtMiddleware,postController.deleteUserPosts)
router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImage"),userController.updateUser)
module.exports = router