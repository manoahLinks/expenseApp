const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({

    name:           {type: String, required: true},
    location:       {type: String, required: true},
    email:          {type: String},
    phone:          {type: Number},
    totalSupplies:  {type: Number, default: 0},
    totalPayments:  {type: Number, default: 0}
},{timestamps: true})


const supplier = mongoose.model('supplier', supplierSchema)

module.exports = supplier