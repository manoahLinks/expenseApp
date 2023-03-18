require('dotenv').config()
const User = require('../models/user'),
      jwt = require('jsonwebtoken')

const createToken = (_id) => {

    return jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: '1d'})
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
    let {id} = req.params.id
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

        res.status(200).json({email, token}) 

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
        const token = createToken(user._id)

        res.status(200).json({email, token}) 

    } catch (error) {
         res.status(400).json({error: error.message})
    }   
   
}


module.exports = exports