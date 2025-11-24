const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
})


// jwt 
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
            process.env.SECRET_KEY,
            { expiresIn: '30d' })
    } catch (error) {
        console.log(error)
    }
}

// pre method which 
// this method runs before saving data into DB 
// get all data of DB and the data which is going to save in DB 
userSchema.pre('save', async function (next) {

    //if password is not provided
    if (!this.isModified('password')) {
        next()
    }
    else {
        try {
            const saltRound = await bcrypt.genSalt(10);
            const hashed_password = await bcrypt.hash(this.password, saltRound)
            this.password = hashed_password
            console.log(this)
        }
        catch (err) {
            next(err)
        }
    }
})


// create the model of the schema (structure)
// 'User' is the model 
// modle should be Uppercase first work and singular
// it will be created as a collection in lowecase and plurral 'User' -> "users" by mongoDB
const User = new mongoose.model("User", userSchema)
module.exports = User