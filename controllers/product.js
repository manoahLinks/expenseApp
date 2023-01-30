const Product = require('../models/product')

// creating a new product
exports.createProduct = async (req, res) => {

    const {
        name,
        materials,
        costOfLabour,
        costOfPackaging,
        costOfEnergy,
        costOfRent,
        netWeight,
        productionPrice,
        marketPrice
    } = req.body

    try {
        
        const createdBy = req.user._id
        const newProduct = await Product.create({name, materials, costOfLabour, costOfPackaging, costOfEnergy, costOfRent, netWeight, productionPrice, marketPrice})
        return res.status(201).json(newProduct)

    } catch (error) {
        res.status(400).json(error.message)
    }
}


module.exports = exports