const express = require('express')
const router = express.Router()
const {getDoctor, isDoctor} = require('../controllers/doctorController')
const {protect} = require('../middleware/authMiddleware')


router.get('/', protect, isDoctor, getDoctor)

module.exports = router