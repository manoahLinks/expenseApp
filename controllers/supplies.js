const Supplies = require('../models/supplies')

// creating a new supply record
exports.createSupply = async (req, res) => {

    const {material, quantity, amount, supplier} = req.body

    try {
        
        const createdBy = req.user._id
        const response = await Supplies.create({material, quantity, amount, supplier, createdBy})
        return res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// get all supply records
exports.getAllSupplies = async (req, res) => {

    try {
        
        const response = await Supplies.find({})
        return res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// delete a supply 
exports.DeleteSupply = async (req, res) => {

    const id = req.params
 
    try {
        
        const response = await Supplies.findByIdAndDelete(id)
        return res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error.json)
    }
}

module.exports = exports