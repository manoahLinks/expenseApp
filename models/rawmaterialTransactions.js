const mongoose = require('mongoose')

const rawmaterialTransactionsSchema = new mongoose.Schema({

    type:     {type: String, required: true},
    material: {type: String, required: true},
    quantity: {type: Number, required: true},
    amount:   {type: Number, required: true},
    supplier: {type: String},
    reciever: {type: String},
    description: {type: String},
    createdBy: {type: String}

}, {timestamps: true})


const RawmaterialTransactions = mongoose.model('rawmaterialTransaction', rawmaterialTransactionsSchema)

module.exports = RawmaterialTransactions