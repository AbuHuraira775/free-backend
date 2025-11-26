const router = require('express').Router()
const adminController = require('../../controllers/committee/admin-controller')

router.post('/create-committee', adminController.createCommittee)
router.post('/add-member', adminController.addMember)
router.patch('/edit-member/:member_id', adminController.updateMemberById)
router.delete('/delete-member/:member_id', adminController.deleteMemberById)

module.exports = router 