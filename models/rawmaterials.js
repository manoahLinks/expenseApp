let mongoose = require(`mongoose`)

const rawmaterialSchema = new mongoose.Schema({

    name:             {type: String, required: true},
    supplier:         {type: String},  
    net_weight:       {type: Number, required: true},
    net_price:        {type: Number, required: true},
    qty_available:    {type: Number},
    tot_qty_purchased:{type: Number},
    re_order_level:   {type: Number, required: true},
    price_per_gram:   {type: Number, required: true}

})


const Rawmaterial = mongoose.model('rawmaterial', rawmaterialSchema)

module.exports = Rawmaterial