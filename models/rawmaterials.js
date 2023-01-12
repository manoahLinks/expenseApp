let mongoose = require(`mongoose`)

const rawmaterialSchema = new mongoose.Schema({

    name:               {type: String, required: true},
    supplier:           {type: String},  
    netWeight:          {type: Number, required: true},
    netPrice:           {type: Number, required: true},
    qtyAvailable:       {type: Number},
    totQtyPurchased:    {type: Number},
    reOrderLevel:       {type: Number, required: true},
    pricePerGram:       {type: Number}

})


const Rawmaterial = mongoose.model('rawmaterial', rawmaterialSchema)

module.exports = Rawmaterial