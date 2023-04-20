exports.checkRole = (roles) => {

    return (req, res, next) => {

        try {
            if(!roles.includes(req.role)) {
                throw Error('your role is not authorized access')
            } 
            next()
        } catch (error) {
            res.status(403).json(error.message)
        }
        
    }
}

module.exports = exports