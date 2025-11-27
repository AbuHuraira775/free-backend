const router = require('express').Router()

router.route('/').get(authController.home)

router.route('/register').post(validator(signupSchema), authController.register)

router.route('/login').post(authController.login)

module.exports = router