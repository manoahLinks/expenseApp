const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({

    name:       {type: String, required: true},
    sex:        {type: String, required: true},
    phone:      {type: Number, required: true},
    email:      {type: String},
    location:   {type: String, required: true}
})

const Customer = mongoose.model('customer', customerSchema)

module.exports = Customer