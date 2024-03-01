// const Patients = require('../models/patientModel')


//Get patient profile
// api/patient/proifle

const getPatient = (req,res)=>{
    res.send('This is patient profile')
}

module.exports = {
    getPatient,
}