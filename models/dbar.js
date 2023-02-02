const mongoose = require('mongoose')

const dbarSchema = new mongoose.Schema({

    
}, {timestamps: true})


const Dbar = mongoose.model('dbar', dbarSchema)

module.exports = Dbar