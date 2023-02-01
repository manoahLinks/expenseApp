const { default: mongoose, mongo } = require('mongoose')
const Account = require('../models/account'),
        Deposit = require('../models/deposit')


// getting all accounts in database

exports.getAllAccounts = async (req, res) => {
    try {
        
        let response = await Account.find({})
        res.status(200).json(response)

    } catch (error) {
        res.status(404).json({error: error, message: 'there was an error retrieving accounts info'})
    }
    
}

// creating a new account
exports.createAccount = async (req, res) =>{

    const {name, pin} = req.body

    try {
        const createdBy = req.user._id
        let response = await Account.create({name, pin, createdBy})
        res.status(201).json(response)

    } catch (error) {
        res.status(400).json({error: error, message: 'unable to create account'})
    }
}

// finding a single account
exports.findSingleAccount = async (req, res) => {
    let {id} = req.params

    try {

        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({error: error, message: 'Account does not exist'})
        }
        let account = await Account.findById({_id: id})
        res.status(200).json(account)
        
    } catch (error) {
        res.status(400).json({error: error, message: 'unable to locate account'})
    }
}

// funding an account
exports.fundAccount = async (req, res) => {

    const {pin, amount} = req.body,
    {id} = req.params

    try {

        // checking if bjecId is valid
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({message: 'invalid id'})
        }
        
        // finding account selected
        let foundAcct = await Account.findById(id)

        //adding the balance of the found account to the new amount to be funded 
        const newBalance = Number(foundAcct.balance) + Number(amount)

        // checking if foundAcct pin is equalto pin provided
        if(foundAcct.pin == pin){
            
            const accountName = foundAcct.name
            const depositedBy = req.user._id
            // creating a new deposit transaction
            let newDeposit = await Deposit.create({amount, depositedBy, accountName})

            // updating the account with the new balance addeded above
            let account = await Account.findOneAndUpdate({name: balance.name}, {
                balance: newBalance
            } )
            res.status(200).json({account: account, deposit: newDeposit})
        }else{
            // throwing error if pin is incorrect 
            throw Error('Incorrect pin')
        }

    } catch (error) {
        // catching all error and displaying error message
        res.status(404).json(error.message)
    }
}


// delete and account
exports.deleteAccount = async (req, res) => {
    const {id} = req.params
    try {
        
        // checking if account id is valid
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw Error('invalid id')
        }

        // deleting account using its id and returning response
        let response = await Account.findByIdAndDelete(id)
        res.status(200).json(response)

    } catch (error) {
        // catching all errors
        res.status(400).json(error.message)
    }
}

module.exports = exports