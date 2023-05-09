const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({

    name:       {type: String, required: true},
    sex:        {type: String},
    phone:      {type: Number, required: true},
    email:      {type: String},
    address:    {type: String, required: true},
    createdBy:  {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    updatedBy:  {type: String}
}, {timestamps: true})

const Customer = mongoose.model('customer', customerSchema)

module.exports = Customer