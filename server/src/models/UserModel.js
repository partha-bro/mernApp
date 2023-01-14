const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true
        },
        phone: {
            type: String,
            match: /^[0-9]{10}$/        //  Regular Expression of 10 digit and 0 to 9 number
        },
        work: {
            type: String,
            default: 'B-Tech Engineer'
        },
        password: {
            type: String,
            required: true
        },
        cnfPassword: {
            type: String,
            required: true
        }
    },{timestamps:true}
)

module.exports = mongoose.model('user',userSchema)