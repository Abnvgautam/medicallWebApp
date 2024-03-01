// const Doctors = require('../models/DoctorModel')


//Get doctor profile
// api/doctor/proifle

const getDoctor = (req,res)=>{
    res.send('This is doctor profile')
}

module.exports = {
    getDoctor,
}