const mongoose = require(`mongoose`)
const Rawmaterial = require(`../models/rawmaterials`)
const supplier = require("../models/supplier")


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

// get single Rawmaterial
exports.getsingleMaterial = async (req, res) => {

    const {id} = req.params

    try {
        
        const foundRawmaterial = await Rawmaterial.findById(id)
        
        return res.status(200).json(foundRawmaterial)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

// recieve rawmaterial fron supplier
exports.recieveRawmaterial = async (req, res) => {

    const {material, vendor, quantity, cost} = req.body
    
    try {
        
        // check if reqbody is empty
        if(!material || !quantity || !cost || !vendor){
            throw Error(`All fields are required`)
        }

        // find supplier by name
        const foundSupplier = await supplier.findOne({name: vendor})

        if(!foundSupplier){
            throw Error(`supplier not found`)
        }

        // function to add two numbers together
        const addition = (a, b) =>{

            return Number(a) + Number(b)
        }

        // adding totalsupplies to cost
        const totSupply = await addition(foundSupplier.totalSupplies, cost)

        // updating supplier with current totalsupplies(totSupply)
        const updateSupplier = await supplier.findOneAndUpdate({name: vendor}, {totalSupplies: totSupply})

        // fiding a rawmaterial
        const foundMaterial = await Rawmaterial.findOne({name: material})

        // adding totalpurchased to quantity
        const totalQtyPurchased = await addition(foundMaterial.totQtyPurchased, quantity)
        
        // adding qyavailable to quantity
        const quantityAvailable = await addition(foundMaterial.qtyAvailable, quantity)

        // updating rawmaterial quatnityAvailable and totalQuantitypurchased
        const updateRawMaterial = await Rawmaterial.findOneAndUpdate({name: material}, {totQtyPurchased: totalQtyPurchased, qtyAvailable: quantityAvailable})
        
        return res.status(200).json('successfully recorded')

    } catch (error) {
        res.status(400).json(error.message)
    }
}


// update rawmaterial information
exports.updateRawmaterialInformation = async (req, res) => {

    const {id} = req.params
    const {name, supplier, netWeight, netPrice, reOrderLevel} = req.body

    try {
        
        const updatedRawmaterial = await Rawmaterial.findByIdAndUpdate(id, {supplier: supplier, netweight: netWeight, netPrice: netPrice, reOrderLevel: reOrderLevel})

        return res.status(200).json(updatedRawmaterial)
        
    } catch (error) {
        res.status(400).json(error.message)
    }

}

module.exports = exports