const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

let userSchema = new mongoose.Schema({

    email:      {type: String, required: true, unique: true},
    department: {type: String},
    isAdmin:    {type: Boolean, default: false},
    password:   {type: String},
    ipAddress:  {type: String}

}, {timestamps: true})

userSchema.statics.signup = async function (email, password) {

    // validation
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)){
        throw Error('email is not valid')
    }
    
    if(!validator.isStrongPassword(password)){
        throw Error ('password not strong enough')
    }

    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})

    return user

}

userSchema.statics.login = async function (email, password) {

     // validation
     if(!email || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({email})

    if(!user){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user

}

let User = mongoose.model('user', userSchema)

module.exports = User