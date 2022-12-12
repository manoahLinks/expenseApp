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

exports.registerUser = async (req, res) => {

    let {email, department} = req.body

    try {

        let registeredUser = await User.findOne({email:email})

        if(registeredUser){
            res.status(400).json({message: 'user already exist in database'})
        }
        if(!registeredUser){
            let newUser = new User({email: email, department: department})

            // generating a salt password
            const salt = await bcrypt.genSalt(10)

            // setting the user password to a hashed password
            user.password = await bcrypt.hash(body.password, salt)
            
            user.ipAddress = req.socket.remoteAddress
            // saving user detials to database
            user.save().then((newUser)=>{
                // generating a token to handle authorization
                let token = jwt.sign({newUserId: newUser.id}, process.env.SECRET_KEY)
                res.status(201).json({newUser, token})
            })
        }

        
        
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = exports