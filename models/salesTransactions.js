const mongoose = require('mongoose')

const salesTransactionSchema = new mongoose.Schema({

    customerId: {type: mongoose.Schema.Types.ObjectId, ref: 'customer'},
    transactionType: {type: String, required: true},
    invoiceNo: {type: String, required: true},
    cart: [],
    amount: {type: Number},
    discount: {type: Number},
    amountPaid: {type: Number},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}

}, {timestamps: true})

const SalesTransactions = mongoose.model('salesTransaction', salesTransactionSchema)

module.exports = SalesTransactions