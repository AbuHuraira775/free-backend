const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const committeeSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, },
    code: { type: String, unique: true, uppercase: true, required: true },
    starting_date: { type: Date, required: true },
    ending_date: { type: Date },
    duration_months: { type: Number, required: true },
    total_members: { type: Number, required: true },
    member_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true }],
    ordered_member_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true }],
    // admin: {type: mongoose.Schema.Types.ObjectId,ref: 'Member',required: true},
    pay_amount: { type: Number, required: true },
    recieve_amount: { type: Number, required: true },
    payment_frequency: { type: String, enum: ["monthly", "weekly", "10 days"], default: "monthly", required: true },
    // payments: [{
    //         member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
    //         month: String,
    //         amount_paid: Number,
    //         paid_on: Date,
    //         status: {type: String,enum: ["paid", "pending", "late"],default: "pending"},
    //     }]
})

const Committee = new mongoose.model("Committee", committeeSchema)
module.exports = Committee