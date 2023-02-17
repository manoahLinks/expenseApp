const mongoose = require('mongoose')
const Account = require('../models/account'),
        Transaction = require('../models/transactions')


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

        // checking if objecId is valid
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw Error('invalid id')
        }
        
        // finding account to be funded
        let foundAcct = await Account.findById(id)

        //adding the balance of the found account to the new amount to be funded 
        const newBalance = Number(foundAcct.balance) + Number(amount)

        // checking if foundAcct pin is equalto pin provided
        if(foundAcct.pin == pin){
            
            const accountName = foundAcct.name
            const depositedBy = req.user._id
            // creating a new deposit transaction
            let newDeposit = await Transaction.create({amount, depositedBy, accountName})

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

// transfer to another account
exports.transferToAnotherAccount = async (req, res) => {

    const {id} = req.params 
    const {payee, amount, pin} = req.body

    try {
        
        // find payer account
        const foundAccount = await Account.findById(id)

        // check if pin is correct
        if(foundAccount.pin != pin){
            throw Error('Incorrect pin')
        }

        // check is balance is greater or equal to transfer amount
        if(foundAccount.balance >= amount){

            // substract payer current balance to the funding amount
            const newPayerBalance = Number(foundAccount.balance) - Number(amount)

            // update the payer account with new balance
            const updatedPayerAccount = await Account.findByIdAndUpdate(id, {balance: newPayerBalance})

            // find payee account using name
            const payeeAccount = await Account.findOne({name: payee})

            // add payee account balance to the funding amount
            const newPayeeBalance = await Number(payeeAccount.balance) + Number(amount)
            
            // update the payee account with new balance
            const updatedPayeeAccount = await Account.findOneAndUpdate({name: payee}, {balance: newPayeeBalance})

            // return results
            return res.status(200).json({payer: updatedPayerAccount, payee: updatedPayeeAccount})

        }else{
            // error if payer account balance is less than funding amount
            throw Error('Insufficient balance')
        }
        
    } catch (error) {
        // catch all error and display to the frontend
        res.status(400).json(error.message)
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