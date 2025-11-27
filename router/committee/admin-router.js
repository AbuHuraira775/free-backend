const router = require('express').Router()
const adminController = require('../../controllers/committee/admin-controller')

//committee
router.get('/committee/get_all', adminController.getAllCommittees)
router.get('/committee/:committee_id', adminController.getCommitteeById)
router.post('/create-committee', adminController.createCommittee)
router.put('/edit-committee/:committee_id', adminController.updateCommitteeById)
router.delete('/delete-committee/:committee_id', adminController.deleteCommitteeById)
  
//member 
router.get('/member/get_all', adminController.getAllMembers)
router.get('/member/:member_id', adminController.getMemberById)
router.post('/add-member', adminController.addMember)
router.put('/edit-member/:member_id', adminController.updateMemberById)
router.delete('/delete-member/:member_id', adminController.deleteMemberById)

//draw
router.post('/draw/:committee_id', adminController.drawMembers)
router.put('/draw/reset/:committee_id', adminController.resetDraw)
// router.put('/draw/schedule/:committee_id', adminController.resetDraw) // create this API in future 

module.exports = router