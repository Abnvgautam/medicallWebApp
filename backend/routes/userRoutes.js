const express = require('express')
const router = express.Router()
const  { getUsers}  = require('../controllers/userController')


router.get('/', getUsers)

router.post('/', (req, res) => {
    res.status(200).json({message: 'Create Users'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update User ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete User ${req.params.id}`})
})


module.exports = router