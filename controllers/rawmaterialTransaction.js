const RawmaterialTransactions = require('../models/rawmaterialTransactions')

// creating a new supply record
exports.createSupply = async (req, res) => {

    const {material, quantity, amount, supplier} = req.body

    try {
        
        const createdBy = req.user._id
        const response = await RawmaterialTransactions.create({type: 'purchase', material, quantity, amount, supplier, createdBy})
        return res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.createUsage = async (req, res) => {

    const {material, quantity, amount, reciever, description} = req.body

    try {
        
        const createdBy = req.user._id
        const response = await RawmaterialTransactions.create({type: 'usage', material, quantity, amount, description, reciever, createdBy})
        return res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// get all supply records
exports.getAllSupplies = async (req, res) => {

    try {
        
        const response = await RawmaterialTransactions.find({})
        return res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// delete a supply 
exports.DeleteSupply = async (req, res) => {

    const {id} = req.params
 
    try {
        
        const response = await RawmaterialTransactions.findByIdAndDelete(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = exports