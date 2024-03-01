const express = require('express')
const router = express.Router()
const  { getUsers, setUsers, updateUsers, deleteUsers}  = require('../controllers/userController')


router.route('/').get(getUsers).post(setUsers)
router.route('/:id').put(updateUsers).delete(deleteUsers)



module.exports = router