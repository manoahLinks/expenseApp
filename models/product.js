const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name:            {type: String, required: true, unique: true},
    materials:       [{type: mongoose.Schema.Types.ObjectId, ref: 'rawmaterial'}],
    costOfLabour:    {type: Number, required: true},
    costOfPackaging: {type: Number, required: true},
    costOfEnergy:    {type: Number, required: true},
    costOfRent:      {type: Number, required: true},
    productionPrice: {type: Number, required: true},
    marketPrice:     {type: Number, required: true},
    createdBy:       {type: String},
    updatedBy:       {type: String}

}, {timestamps: true})

const Product = mongoose.model('product', productSchema)

module.exports = Product