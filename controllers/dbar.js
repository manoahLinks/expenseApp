const mongoose = require('mongoose'),
    Dbar = require('../models/dbar'),
    Product = require('../models/product')

exports.getDbar = async (req, res) => {

    try {
        
        const allDbar = await Dbar.find({})
        return res.status(200).json(allDbar)

    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.createDdbar = async (req, res) => {

    const { 
        product

    } = req.body

    const today = new Date()

    try {

        const foundProduct = await Product.findOne({name: product})

        if(!product){
            throw Error('no product found')
        } 

        const multiplyQtyByBags = () => {

            foundProduct.materials.forEach((material)=>{
                console.log(material)
            })
            
        }

        multiplyQtyByBags()
 
    } catch (error) {
        res.status(400).json(error.message)
    }
}


exports.deleteDbar = async (req, res) => {

    const {id} = req.params

    try {

        if(!mongoose.Types.ObjectId.isValid(id)){
            throw Error('id does not exist')
        }
        
        const deletedDbar = await Dbar.findByIdAndDelete(id)
        return res.status(200).json({message: ` we just deleted ${deletedDbar._id} ` })

    } catch (error) {
        res.status(400).json(error.message)
    }
}
 
module.exports = exports