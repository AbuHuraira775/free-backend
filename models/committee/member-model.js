const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    display_name: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String
    },
    age: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    emergency_contact_person_mobile: {
        type: String,
        required: true
    },
    residential_address: {
        type: String,
        required: true
    },
    permanent_address: {
        type: String,
        required: true
    },
    cnic_number: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['member', 'admin'],
        default: 'member',
        required: true
    },
    emergency_contact_person_name: {
        type: String,
        required: true
    }
})

const Member = new mongoose.model("Member", memberSchema)
module.exports = Member