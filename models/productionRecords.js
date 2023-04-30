const mongoose = require('mongoose')

const productionRecordSchema = new mongoose.Schema({

    product: {type: mongoose.Schema.Types.ObjectId, ref: 'product',required: true},
    bags: {type: Number, required: true},
    panCount: {type: Number, required: true},
    damages: {type: Number},
    comment: {type: String},
    createdBy: {type: String},
    updatedBy: {type: String}

}, {timestamps: true})

const ProductionRecord = mongoose.model('ProductionRecord', productionRecordSchema)

module.exports = ProductionRecord