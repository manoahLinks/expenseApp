require('dotenv').config()
const User = require('../models/user'),
      jwt = require('jsonwebtoken')

const createToken = (_id, role) => {

    return jwt.sign({_id: _id, role: role}, process.env.SECRET_KEY, {expiresIn: '1d'})
}    

exports.getAllUsers = async (req, res) => {
    try {

        const response = await User.find({})
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getSingleUser = async (req, res) => {
    let {id} = req.params
    try {
        
        const response = await User.findById(id)
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getSingleUserByEmail = async (req, res) => {
    let {email} = req.params
    try {
        
        const response = await User.findOne({email: email})
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.registerUser = async (req, res) => {

    let {email, password} = req.body

   try {
    
        const user = await User.signup(email, password)

        // create a token
        const token = createToken(user._id)
        const decodedToken = await jwt.decode(token)

        res.status(200).json({email,  token, decodedToken}) 

   } catch (error) {
        res.status(400).json({error: error.message})
   }

}


// login logic for User
exports.loginUser = async (req, res)=>{

    const {email, password} = req.body 

    try {
    
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id, user.role)
        const decodedToken = await jwt.decode(token)

        res.status(200).json({email, token, decodedToken}) 

    } catch (error) {
         res.status(400).json({error: error.message})
    }   
   
}

exports.assignRole = async (req, res) => {

    const {userId, role} = req.body

    try {
        const user = await User.findById(userId)
        console.log(userId)
        if(!user){
            throw Error('user not found in database')
        }

        user.role = role
        await user.save()
        return res.status(200).json(user)
        
    } catch (error) {
        return res.status(403).json(error.message)
    }

}

exports.updateUser = async(req, res) => {

    const {id} = req.params
    const {name, email, phone, homeAddress} = req.body

    try {
        let updatedUser = await User.findOneAndUpdate(id, {name: name, email:email, phone:phone, homeAddress:homeAddress})
        
        if(!updatedUser){
            throw Error(`could not update user info !`)
        }

        return res.status(200).json(updatedUser)

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

exports.changeUserState = async (req, res) => {
    const {id} = req.params
    const {state} = req.query

    try {
        const user = await User.findByIdAndUpdate(id, {isActive: state})

        if(!user){
            throw Error('user no longer in database')
        }

        return res.status(200).json({message:`successfully updated`, data: user})
        
    } catch (error) {
        return res.status(403).json(error.message)
    }
}

exports.deleteUser = async (req, res) => {
    const {id} = req.params.id

    try {

        const user = await User.findByIdAndDelete(id)
        return res.status(200).json(user)
        
    } catch (error) {
        return res.status(403).json(error.message)
    }
}

module.exports = exports