const express = require('express')
const router = express.Router()
const {getDoctor} = require('../controllers/doctorController')

router.route('/').get(getDoctor)

module.exports = router