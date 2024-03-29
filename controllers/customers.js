const Customer = require('../models/customers')
const User = require('../models/user')

// get all customers
exports.getAllCustomers = async (req, res) => {
    try {
        
        const response = await Customer.find({})
        return res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// create a new customer
exports.createCustomer = async (req, res) => {

    const {name, phone, email, address} = req.body

    try {
        if(!name || !phone || !email || !address){
            throw Error(`all fields are required`)
        }
        const createdBy = req.user._id
        const response = await Customer.create({name, phone, email, address, createdBy})
        res.status(201).json(response)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get single customer
exports.getSingleCustomer = async (req, res) => {

    const {id} = req.params

    try {
        
        const response = await Customer.findById(id).populate('createdBy')
        return res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error)
    }
}

// delete customer
exports.deleteCustomer = async (req, res) => {
    const {id} = req.params

    try {

        const response = await Customer.findByIdAndDelete(id)
        return res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = exports