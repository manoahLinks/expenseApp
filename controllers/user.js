require('dotenv').config()
const User = require('../models/user'),
      jwt = require('jsonwebtoken'),
      bcrypt = require('bcryptjs')

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

exports.registerUser = async (req, res) => {

    let {email, password} = req.body

    try {

        let registeredUser = await User.findOne({email:email})

        if(registeredUser){
            res.status(400).json({message: 'user already exist in database'})
        }
        if(!registeredUser){
            let newUser = new User({email: email, password})

            // generating a salt password
            const salt = await bcrypt.genSalt(10)

            // setting the user password to a hashed password
            newUser.password = await bcrypt.hash(password, salt)
            
            newUser.ipAddress = req.socket.remoteAddress
            // saving user detials to database
            newUser.save().then((newUser)=>{
                // generating a token to handle authorization
                let token = jwt.sign({newUserId: newUser.id}, process.env.SECRET_KEY)
                res.status(201).json({email, token})
            })
        }

        
        
    } catch (error) {
        res.status(400).json(error)
    }
}


// login logic for User
exports.loginUser = async (req, res)=>{

    const {email, password} = req.body    
    // checking for admin email in database
    let user = await User.findOne({email: email})
        if(user){
            // comparing the inputted password and hashed password using bcrypt
            const validPassword = await bcrypt.compare(password, user.password)
            if(validPassword){
                req.session.isAuth = true
                res.status(200).json({email, token})
            }else{
                res.status(400).json({message: 'password is invalid'})
            }
        }else{
            res.status(400).json({message: 'User acct does not exist'})
        }
}


module.exports = exports