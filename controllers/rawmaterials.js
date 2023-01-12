const mongoose = require(`mongoose`)
const Rawmaterial = require(`../models/rawmaterials`)


//  get all raw-materials
exports.getAllRawmaterials = async (req, res) => {

    try {
        
        const response = await Rawmaterial.find({})
        return res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error.message)
    }
} 

// create a new raw material
exports.createRawMaterial = async (req, res) => {

    const {
        name,
        netWeight,
        netPrice,
        reOrderLevel,

    } = req.body

    try {
        
        const response = await Rawmaterial.create({name, netWeight, netPrice, reOrderLevel})
        return res.status(201).json(response)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.deleteRawMaterial = async (req, res) => {

    const {id} = req.params

    try {
        
        const response = await Rawmaterial.findByIdAndDelete(id)
        return res.status(200).json(response)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = exports