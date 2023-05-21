const SalesTransactions = require('../models/salesTransactions')

exports.getAllSalesTransactions = async(req, res) => {

    try {

        let response = await SalesTransactions.find({})
        return res.status(200).json(response)
        
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

exports.createTransaction = async(req, res) => {

    // get all data from reqbody
    let {
        customerId,
        transactionType,
        cart,
        amount,
        discount,
        amountPaid,
    } = req.body

    // creating func to generate invoice num

    const genInvoiceNo = () => {
        let today = Date.now()
    
        return `SW${today}sales`
    }
 
    try {

        genInvoiceNo()
        // check if required data are entered
        if(!customerId){
            throw Error('some fields are required')
        }

        const invoiceNo = genInvoiceNo()
        const createdBy = req.user._id

        let response = await SalesTransactions.create({customerId, transactionType, invoiceNo, amount, cart, discount, amountPaid, createdBy })
        return res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = exports