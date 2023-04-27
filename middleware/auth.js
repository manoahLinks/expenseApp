require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/user')

exports.isAuth = async (req, res, next) => {
   
    const { authorization } = req.headers

    if(!authorization){
        res.status(401).json({message: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]

    try {
        const {_id, role} = jwt.verify(token, process.env.SECRET_KEY)
        
        req.user = _id  
        req.role = role 
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is unauthorized'})
    }
}

exports.checkTokenExpiration = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.decode(token);
  
    if (decodedToken.exp < Date.now() / 1000) {
      req.session.destroy();
      localStorage.removeItem('user')
      return res.redirect('/login');
    }
    
    next();
}

module.exports = exports