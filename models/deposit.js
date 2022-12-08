const mongoose = require('mongoose')

const depositSchema = new mongoose.Schema({

    amount: {type: String, required: true},
    depositor:{type: String}


}, {timestamps: true})


let Deposit = mongoose.model('deposit', depositSchema)

module.exports = Deposit