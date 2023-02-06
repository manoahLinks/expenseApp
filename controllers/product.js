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
        marketPrice,
        productionBenchMark,
        salesBenchMark
    } = req.body

    try {
        
        const createdBy = req.user._id
        const newProduct = await Product.create({name, materials, costOfLabour, costOfPackaging, costOfEnergy, costOfRent, netWeight, productionPrice, marketPrice, productionBenchMark, salesBenchMark,createdBy})
        return res.status(201).json(newProduct)

    } catch (error) {
        res.status(400).json(error.message)
    }
}


exports.getAllProducts = async (req, res) => {

    try {
      
        const products = await Product.find({})
        return res.status(200).json(products)
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.getSingleProduct = async (req, res) => {

    const {id} = req.params

    try {
        
        const foundProduct = await Product.findById(id)
        return res.status(200).json(foundProduct)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.updateProduct = async (req, res) => {

    const {id} = req.params

    try {
        
        const updatedBy = req.user._id
        const updatedProduct = await Product.findByIdAndUpdate(id, {})
        return res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.deleteProduct = async (req, res) => {

    const {id} = req.params

    try {
        
        const deletedProduct = await Product.findByIdAndDelete(id)
        return res.status(200).json(deletedProduct)

    } catch (error) {
        res.status(400).json(error.message)
    }
}
 
module.exports = exports