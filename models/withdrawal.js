const mongoose = require('mongoose')

const withdrawalSchema = new mongoose.Schema({

    amount:      {type: Number, required: true},
    accountName: {type: String},
    withdrawnBy: {type: String},
    updatedBy:   {type: String}

}, {timestamps: true})


const Withdrawal = mongoose.model('withdrawal', withdrawalSchema)

module.exports = Withdrawal