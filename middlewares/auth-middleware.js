const jwt = require('jsonwebtoken')
const User = require('../models/user-modle')
require('dotenv').config()

 const authMiddleware = async (req, res, next) => {
    try{
        const authHeader = req.header('Authorization')
        if(!authHeader){
            throw new Error('Token is not provided')
        }
        const token = authHeader.replace('Bearer ', '')
        const isVerified = jwt.verify(token, process.env.SECRET_KEY)
        if(!isVerified){
            throw new Error('Token is not verified')
        }
        const userData = await User.findOne({_id: isVerified.userId}).
        // select('-password')
        select({password:0})
        
        req.user = userData
        console.log('user : ', userData)
        next()
        
   }
    catch(err){
         next(err)
    }
}

module.exports = authMiddleware