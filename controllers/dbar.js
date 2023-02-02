const mongoose = require('mongoose'),
    Dbar = require('../models/dbar')

exports.getDbar = async (req, res) => {

    try {
        
        const allDbar = await Dbar.find({})
        return res.status(200).json(allDbar)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.createDdbar = async (req, res) => {

    const { 
        date
    } = req.body

    const today = new Date()

    try {

        if(date.getDate() > today.getDate()){
            throw Error('cannot enter this report, date not yet reached')
        }
        console.log(date, today)

        const foundReport = await Dbar.findOne({createdAt: date})

        if(foundReport) {
            throw Error('Records already submitted')
        }

        const newDbar = await Dbar.create({})
        res.status(200).json(newDbar)

    } catch (error) {
        res.status(400).json(error.message)
    }
}


exports.deleteDbar = async (req, res) => {

    const {id} = req.params

    try {

        if(!mongoose.Types.ObjectId.isValid(id)){
            throw Error('id does not exist')
        }
        
        const deletedDbar = await Dbar.findByIdAndDelete(id)
        return res.status(200).json({message: ` we just deleted ${deletedDbar._id} ` })

    } catch (error) {
        res.status(400).json(error.message)
    }
}
 
module.exports = exports