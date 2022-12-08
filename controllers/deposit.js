let mongoose = require('mongoose')
const Deposit = require('../models/deposit')

exports.getAllDeposits = async (req, res) =>{

    try {
        
        let allDeposits = await Deposit.find({}).sort({createdAt: -1})
        res.status(200).json(allDeposits)

    } catch (error) {
        res.status(404).json({error: error})
    }
}


module.exports = exports