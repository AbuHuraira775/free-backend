const express = require('express')
const router = express.Router()
const contactController = require('../controllers/contact-controller')
const validator = require('../middlewares/validator-middleware')
const contactSchema = require('../validator/contact-validator')
const serviceSchema = require('../validator/service-validator')

router.route('/contact').post(validator(contactSchema),contactController.contact)
router.route('/service').get(contactController.services)

module.exports = router