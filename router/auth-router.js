const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth-controller')
const validator = require('../middlewares/validator-middleware')
const signupSchema = require('../validator/auth-validator')
const authMiddleware = require('../middlewares/auth-middleware')

router.route('/').get(authController.home)

router.route('/register').post(validator(signupSchema), authController.register)

router.route('/login').post(authController.login)

router.get('/get-user',authMiddleware,authController.getUser)




module.exports = router