const mongoose = require('mongoose')
const dotenv = require('dotenv').config() 

const URI = process.env.URI

const connectDB = async (req, res) => {

    try {
        await mongoose.connect(URI)
        console.log(`Database is connected successfully`)
    }
    catch (err) {
        console.error(`Database is not connected due to : ${err}`)
        process.exit(0)
    }
}

module.exports = connectDB