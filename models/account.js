const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({

    name:       {type: String, required: true},
    pin:        {type: Number, required: true},
    balance:    {type: Number, default: 0},
    createdBy:  {type: String},
    updatedBy:  {type: String}

}, {timestamps: true})

Account = mongoose.model('account', accountSchema)

module.exports = Account