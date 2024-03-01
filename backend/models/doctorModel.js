const mongoose = require('mongoose')

const doctorsSchema = mongoose.Schema({
    "_id":ObjectID,
    "name" : String,
    "specialization" : String,
    "email" : String,
    "phone" : String,
    "appointments" : [
        {
            "appointment_id" : ObjectId,
            "patient_id" : ObjectId,
            "date": Date,
            "reason": String,
            "notes" : String
        }
    ]
})

module.exports = mongoose.model('Dcotors', doctorsSchema)