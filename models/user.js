const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    department: {type: String},
    isAdmin: {type: Boolean, default: false},
    password: {type: String, default: 1234},
    ipAddress: {type: String}
})

let User = mongoose.model('user', userSchema)

module.exports = User