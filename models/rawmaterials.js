let mongoose = require(`mongoose`)

const rawmaterialSchema = new mongoose.Schema({

    name:               {type: String, required: true},
    supplier:           {type: String},  
    netWeight:          {type: Number, required: true},
    netPrice:           {type: Number, required: true},
    qtyAvailable:       {type: Number, default: 0},
    totQtyPurchased:    {type: Number, default: 0},
    reOrderLevel:       {type: Number, required: true},
    pricePerGram:       {type: Number},
    createdBy:          {type: String},
    updatedBy:          {type: String}

}, {timestamps: true})


const Rawmaterial = mongoose.model('rawmaterial', rawmaterialSchema)

module.exports = Rawmaterial