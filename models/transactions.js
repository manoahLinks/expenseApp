const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({

    amount:      {type: Number, required: true},
    type:        {type: Number, required: true},
    accountName: {type: String},
    createdBy:   {type: String},
    updatedBy:   {type: String}

}, {timestamps: true})


const Transaction = mongoose.model('transaction', transactionSchema)

module.exports = Transaction