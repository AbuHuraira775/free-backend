const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    name: {type: String,required: true},
    username: {type: String,required: true,unique: true},
    image_url: {type: String},
    cnic_image_url: {type: String, required: true},
    age: {type: String},
    mobile: {type: String,required: true},
    emergency_contact_person_name: {type: String,required: true},
    emergency_contact_person_mobile: {type: String,required: true},
    residential_address: {type: String,required: true},
    permanent_address: {type: String,required: true},
    cnic_number: {type: String,required: true,unique: true},
    role: {type: String,enum: ['member', 'admin'],default: 'member',required: true},
    committee_id : {type: mongoose.Schema.Types.ObjectId,ref: 'Committee'},
    is_active: {type: Boolean, default: false},
})

const Member = new mongoose.model("Member", memberSchema)
module.exports = Member