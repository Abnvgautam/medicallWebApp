const express = require('express')
const router = express.Router()
const {getPatient} = require('../controllers/patientController')

router.route('/').get(getPatient)

module.exports = router