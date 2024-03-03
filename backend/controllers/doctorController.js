// const Doctors = require('../models/DoctorModel')


//Get doctor profile
// api/doctor/profile

const isDoctor = (req, res,next)=> {
    if(req.user && req.user.role ==='doctor'){
        next()
    }else{
        res.status(403).json({
            message:'Unauthorized'
        })
    }
}

const getDoctor = (req,res)=>{
    res.send('This is doctor profile')
}

module.exports = {
    getDoctor,
    isDoctor,
}