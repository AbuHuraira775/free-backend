const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const committeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startingDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    total_members: {
        type: Number,
        required: true
    },
    member_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member",
        required: true
    }],
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    }
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

const Committee = new mongoose.model("Committee", committeeSchema)
module.exports = Committee