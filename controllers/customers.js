const Customer = require('../models/customers')

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
        
        const response = await Customer.create({name, phone, email, address})
        res.status(201).json(response)

    } catch (error) {
        res.status(400).json(error.message)
    }
}


module.exports = exports