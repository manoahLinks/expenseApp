const { default: mongoose } = require('mongoose')
const Transaction = require('../models/transactions')

// get all transactions
exports.getAllTransactions = async (req, res) => {

    try {
        
        const allTransactions = await Transaction.find({})
        return res.status(200).json(allTransactions)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// get a single transaction
exports.getSingleTransaction = async (req, res) => {

    const {id} = req.params 

    try {
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw Error('not a valid id')   
        }

        const foundTransaction = await Transaction.findById(id)
        return res.status(200).json(foundTransaction)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// update a transaction
exports.updateTransaction = async (req, res) => {
    const {id} = req.params

    try {

        if(!mongoose.Types.ObjectId.isValid(id)){
            throw Error('not a valid id')   
        }
        
        const updatedBy = req.user._id
        const updatedTransaction = await Transaction.findByIdAndUpdate(id, {})
        return res.status(200).json(updatedTransaction)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// delete a transaction
exports.deleteTransation = async (req, res) => {
    const {id} = req.params 

    try {
        
        const deletedTransaction = await Transaction.findByIdAndDelete(id)
        return res.status(200).json(deletedTransaction)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = exports