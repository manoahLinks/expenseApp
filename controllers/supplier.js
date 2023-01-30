require('dotenv').config()
const supplier = require('../models/supplier'),
        nodemailer = require('nodemailer'),
        smtpTransport = require('nodemailer-smtp-transport') 

// creating a new supplier
exports.registerNewSupplier = async (req, res) => {

    const {name, location, phone, email} = req.body

    try {
        
        if(!name || !location || !phone || !email ){
            throw Error(`All fields are required`)
        }
        const createdBy = req.user._id
        const response = await supplier.create({name, location, phone, email, createdBy})
        const json =  await res.status(201).json(response)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// sending an order via email to request raw materials from suppliers
exports.sendOrderToSupplier = async (req, res) => {

    const {email, order} = req.body

    try {
        
        let transport = nodemailer.createTransport(smtpTransport({
            host: 'smtp.gmail.com',
            secure: true,
            port: 465,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        }))

        const info = await transport.sendMail({
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: 'Order for month of January',
            text: order
        }, (err, sent)=>{
            if(err){
                res.status(401).json(err)     
            }else{
                res.status(200).json(sent)
            }
        })

    } catch (error) {
        res.status(400).json(error.message)
    }
}


// get all suppliers
exports.getAllSuppliers = async (req, res) => {

    try {

        const response = await supplier.find({})
        return res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}


// delete a supplier
exports.deleteSupplier = async (req, res) => {

    const {id} = req.params

    try {
        
        const response = await supplier.findByIdAndDelete(id)
        return res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// make a payment to supplier
exports.paySupplier = async (req, res) => {

    const {supplierName, amount} = req.body

    try {
        
        const foundSupplier = await supplier.findOne({name: supplierName})

        if(!foundSupplier){
            throw Error(`supplier not found`)
        }

        const addition = (a, b) => {
            return Number(a) + Number(b)
        }

        const totalPayments = await addition(foundSupplier.totalPayments, amount)

        const updateTotalPayments = await supplier.findOneAndUpdate({name: foundSupplier.name}, {totalPayments: totalPayments })

        res.status(200).json(updateTotalPayments)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// update supplier information
exports.updateSupplierInformation = async (req, res) => {

    const {id} = req.params
    const updatedBy = req.user._id
    const {name, location, email, phone} = req.body

    try {

        const updatedSupplier = await supplier.findByIdAndUpdate(id, {location: location, email: email, phone: phone, updatedBy: updatedBy})

        return res.status(200).json(updatedSupplier)
        
    } catch (error) {
        res.status(400).json(error.message)
    }

}

// get single supplier 
exports.getSingleSupplier = async (req, res) => {

    const {id} = req.params

    try {

        const foundSupplier = await supplier.findById(id)

        return res.status(200).json(foundSupplier)
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = exports