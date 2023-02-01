let mongoose = require('mongoose')
const Deposit = require('../models/deposit')

// getting all deposits from database
exports.getAllDeposits = async (req, res) =>{

    try {
        
        // querrying database and returnig all deposits
        let allDeposits = await Deposit.find({}).sort({createdAt: -1})
        res.status(200).json(allDeposits)

    } catch (error) {
        // catching all errors
        res.status(404).json(error.message)
    }
}

exports.getSingleDeposit = async (req, res) => {

    const {id} = req.params 

    try {
        
        const foundDeposit = await Deposit.findById(id)
        return res.status(200).json(foundDeposit)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.updateDeposit = async (req, res) => {

    const {id} = req.params 
    const updatedBy = req.user._id
    const {} =req.body

    try {
        
        const updatedDeposit = await Deposit.findByIdAndUpdate(id, {})
        return res.status(200).json(updatedDeposit)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.deleteDeposit = async (req, res) => {

    const {id} = req.params

    try {
        
        const deletedDeposit = await Deposit.findByIdAndDelete(id)
        return res.status(200).json(deletedDeposit)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = exports