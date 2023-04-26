const ProductionRecord = require('../models/productionRecords')

// create a prod. record
exports.createProductionRecord = async (req, res) => {

    const {
        product,
        bags,
        panCount,
        damage,
        comment

    } = req.body

    try {

        if(!product || !bags || !panCount || !damage){
            throw Error('All fields are required !')
        }

        const createdBy = req.user._id
        const newRecord = await ProductionRecord.create({product, bags, panCount, damage, comment, createdBy})
        return res.status(201).json(newRecord)

    } catch (error) {
        return res.status(400).json(error.message)
    }
}


// get all productionRecords
exports.getAllRecords = async (req, res) => {
    try {
        
        const allRecords = await ProductionRecord.find({})
        return res.status(200).json(allRecords)

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

// get a single record
exports.getSingleRecord = async (req, res) => {
    const {id} = req.params

    try {
        
        const foundRecord = await ProductionRecord.findById(id)
        return res.status(200).json(foundRecord)
 
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

// update record
exports.updateRecord = async (req, res) => {
    const {id} = req.params
    const {
        product,
        bags,
        panCount,
        damage,
        comment

    } = req.body

    try {
        
        const updatedRecord = await ProductionRecord.findByIdAndUpdate(id, {
            product,
            bags,
            panCount,
            damage,
            comment
        })
        return res.status(200).json(updatedRecord)
 
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

exports.deleteRecord = async (req, res) => {
    const {id} = req.params

    try {

        const deletedRecord = await ProductionRecord.findOneAndDelete(id)
        return res.status(200).json({message: 'successfully deleted', data: deletedRecord})
        
    } catch (error) {
        return res.status(400).json(error.message)
    }
} 

module.exports = exports