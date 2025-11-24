const router = require('express').Router()
const adminController = require('../controllers/admin-controller')
const adminMiddleware = require('../middlewares/admin-middleware')
const authMiddleware = require('../middlewares/auth-middleware')
const validator = require('../middlewares/validator-middleware')
const signupSchema = require('../validator/auth-validator')

router.get('/users', authMiddleware, adminMiddleware,adminController.allUsers)
router.get('/contacts',authMiddleware, adminMiddleware, adminController.allContacts)
router.get('/services', authMiddleware, adminMiddleware,adminController.allServices)

router.get('/user/:id', authMiddleware, adminMiddleware,adminController.getUserById)
router.get('/service/:id', adminController.getServiceById)

router.delete('/user/delete/:id',authMiddleware, adminMiddleware, adminController.deleteUserById)
router.delete('/contact/delete/:id',authMiddleware, adminMiddleware, adminController.deleteContactById)
router.delete('/service/delete/:id',authMiddleware, adminMiddleware, adminController.deleteServiceById)

router.patch('/user/update/:id', authMiddleware, adminMiddleware,adminController.updateUserById)
router.patch('/service/update/:id', authMiddleware, adminMiddleware,adminController.updateServiceById)

router.post('/service/add', authMiddleware, adminMiddleware,adminController.addService)
router.post('/user/add',authMiddleware, adminMiddleware, adminController.addUser)


module.exports = router