const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')



//Register new User
//POST /api/users/register

const registerUser = asyncHandler(async (req, res) => {

    const {name, email, password, role} = req.body

    if(!name || !email || !password || !role){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if user exists

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash password

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create User

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            role: user.role,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }

})

//Authenticate a user
//POST /api/users/login

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    //Check for user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            role: user.role,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

//Get user data
//GET /api/users/me

const getUser = asyncHandler(async (req, res) => {  
    res.status(200).json(req.user)
})

//Generate JWT

const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = {
    registerUser,
    loginUser,
    getUser,
}