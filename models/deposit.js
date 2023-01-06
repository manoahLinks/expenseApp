const mongoose = require('mongoose')

const depositSchema = new mongoose.Schema({

    amount: {type: String, required: true},
    user_id:{type: String, required: true}


}, {timestamps: true})


let Deposit = mongoose.model('deposit', depositSchema)

module.exports = Deposit