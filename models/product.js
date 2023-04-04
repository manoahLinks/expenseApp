const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name:            {type: String, required: true, unique: true},
    materials:       [],
    quantities:     [],
    costOfLabour:    {type: Number, required: true},
    costOfPackaging: {type: Number, required: true},
    costOfEnergy:    {type: Number, required: true},
    costOfRent:      {type: Number, required: true},
    weightPerLoaf:   {type: Number},
    productionPrice: {type: Number},
    marketPrice:     {type: Number},
    productBenchMark: {type: Number},
    salesBenchMark:   {type: Number},
    createdBy:       {type: String},
    updatedBy:       {type: String}

}, {timestamps: true})

const Product = mongoose.model('product', productSchema)

module.exports = Product