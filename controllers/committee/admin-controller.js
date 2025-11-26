const { default: mongoose } = require("mongoose")
const Committee = require("../../models/committee/committee-model")
const Member = require("../../models/committee/member-model")
const { success, error } = require("../../util/responseStatus")

const createCommittee = async (req, res, next) => {
    try {
        const {
            name,
            code,
            starting_date,
            ending_date,
            total_members,
            admin,
            pay_amount,
            recieve_amount,
            payment_frequency,
            duration_months
        } = req.body

        const exist_committee = await Committee.find({ code })
        if (exist_committee > 0) {
            error(res, { status_code: 400, state: 'false', message: 'committee already exists with this code' })
        }
        if (!code || !name) {
            error(res, { status_code: 400, state: 'false', message: 'committee name and code are required' })
        }

        const committee = new Committee({ duration_months, name: name.toUpperCase(), code, starting_date, ending_date, total_members, admin, pay_amount, recieve_amount, payment_frequency })
        await committee.save()
        success(res, { status_code: 200, state: 'true', message: 'new committee has been created successfully', data: committee })
    }
    catch (error) {
        next(error)
    }
}

const addMember = async (req, res, next) => {
    try { 
        const {
            name,
            username,
            image_url,
            cnic_image_url,
            age,
            mobile,
            emergency_contact_person_name,
            emergency_contact_person_mobile,
            residential_address,
            permanent_address,
            cnic_number,
            role,
            committee_id,
            is_active
        } = req.body

        const exist_member = await Member.find({ username })
        if (exist_member > 0) {
            error(res, { status_code: 400, state: 'false', message: 'member already exists with this username' })
        }
        if (
            !name ||
            !username ||
            !cnic_number ||
            !cnic_image_url ||
            !mobile ||
            !emergency_contact_person_name ||
            !emergency_contact_person_mobile ||
            !residential_address ||
            !permanent_address
        ) {
            error(res, { status_code: 400, state: 'false', message: 'These fields are must required (name, display name, contact number, CNIC number, CNIC image, emergency contact person name and his number, permanent and residential addresses)' })
        }

        const member = new Member({
            name, username, cnic_number,
            cnic_image_url, age, image_url,
            emergency_contact_person_mobile,
            emergency_contact_person_name,
            permanent_address, residential_address,
            role, is_active, committee_id: new mongoose.Types.ObjectId(committee_id), mobile
        })
        await member.save()
        success(res, { status_code: 200, state: 'true', message: 'new member has been created successfully', data: member })
    }
    catch (error) {
        next(error)
    }
}

const updateMemberById = async (req, res, next) => {
    try {
        const { member_id } = req.params
        const {
            name,
            username,
            image_url,
            cnic_image_url,
            age,
            mobile,
            emergency_contact_person_name,
            emergency_contact_person_mobile,
            residential_address,
            permanent_address,
            cnic_number,
            role,
            committee_id,
            is_active
        } = req.body

        const member = await Member.findById(member_id)
        if (!member) {
            error(res, { status_code: 400, state: 'false', message: 'member does not exist' })
        }
        await Member.findByIdAndUpdate(member_id, req.body, { runValidators: true })
        success(res, { status_code: 200, state: 'true', message: 'member details has been updated successfully', data: member })
    }
    catch (error) {
        next(error)
    }
}

const deleteMemberById = async (req, res, next) => {
    try {
        const { member_id } = req.params

        const member = await Member.findByIdAndDelete(member_id);
        if (!member) {
            error(res, { status_code: 400, state: 'false', message: 'member does not exist' })
        }
        success(res, { status_code: 200, state: 'true', message: 'member deleted successfully'})
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    createCommittee, addMember, updateMemberById, deleteMemberById
}