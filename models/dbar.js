const mongoose = require('mongoose')

const dbarSchema = new mongoose.Schema({
    
    rawmaterials: [],
    production: [],
    sales : [],
    expenditure: [],
    cashBreakdown: []
    
}, {timestamps: true})


const Dbar = mongoose.model('dbar', dbarSchema)

module.exports = Dbar