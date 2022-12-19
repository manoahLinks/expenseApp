require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.loginRequired = async (req, res, next)=>{
    let token = req.headers.authorization.split(" ")[1]

    let decoded = await jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
        if(decoded){
            next()
        }else{
            res.json({message: 'your token doesnt match the secret Key', alert: 'please make sure you are logged in'})
        }
    })
}

exports.isAuth = async (req, res, next) => {
    if(req.session.isAuth){
        next()
    }else{
        res.status(400).json({message: 'unauthorized'})
    }
}

module.exports = exports