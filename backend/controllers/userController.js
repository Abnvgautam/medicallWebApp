const asyncHandler = require('express-async-handler')

// @desc  Get Users
// @route  GET /api/users
// @access Private


const getUsers = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get users'})
})

// @desc  Set Users
// @route  POST /api/users
// @access Private


const setUsers = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Create Users'})
})
// @desc  Update Users
// @route  PUT /api/users/:id
// @access Private


const updateUsers = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update User ${req.params.id}`})
})


// @desc  Delete Users
// @route  DELETE /api/users/:id
// @access Private


const deleteUsers = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete User ${req.params.id}`})
})

module.exports ={
    getUsers,
    setUsers, 
    updateUsers,
    deleteUsers,
}