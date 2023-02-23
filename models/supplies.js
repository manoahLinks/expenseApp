const mongoose = require('mongoose')

const supplySchema = new mongoose.Schema({

    type:     {type: String},
    material: {type: String, required: true},
    quantity: {type: Number, required: true},
    amount:   {type: Number, required: true},
    supplier: {type: String, required: true},
    createdBy: {type: String}

}, {timestamps: true})


const Supplies = mongoose.model('supply', supplySchema)

module.exports = Supplies