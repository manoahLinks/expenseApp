const { default: mongoose } = require('mongoose')
const Withdrawal = require('../models/withdrawal')

// get all withdrawals
exports.getAllWithdrawals = async (req, res) => {

    try {
        
        const allWithdrawals = await Withdrawal.find({})
        return res.status(200).json(allWithdrawals)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// get a single withdrawal
exports.getSingleWithdrawal = async (req, res) => {

    const {id} = req.params 

    try {
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw Error('not a valid id')   
        }

        const foundWithdrawal = await Withdrawal.findById(id)
        return res.status(200).json(foundWithdrawal)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// update an expense
exports.updateWithdrawal = async (req, res) => {
    const {id} = req.params

    try {

        if(!mongoose.Types.ObjectId.isValid(id)){
            throw Error('not a valid id')   
        }
        
        const updatedBy = req.user._id
        const updatedWithdrawal = await Withdrawal.findByIdAndUpdate(id, {})
        return res.status(200).json(updatedWithdrawal)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// delete an expense
exports.deleteWithdrawal = async (req, res) => {
    const {id} = req.params 

    try {
        
        const deletedWithdrawal = await Withdrawal.findByIdAndDelete(id)
        return res.status(200).json(deletedWithdrawal)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = exports