const Expense = require('../models/expense'),
      Account = require('../models/account'),
    Transaction   = require('../models/transactions'),
      mongoose = require('mongoose')


//create new expense
exports.addNewExpense = async (req, res) => {

    const {accountName ,type, description, amount} = req.body
    const createdBy = req.user._id

    try{
        // find account to be debited
        const account = await Account.findOne({name: accountName})

        if(!account){
            // throwing error if account not found
            throw Error('error in finding account') 
        }

        // checking if balance on account is greater than the amount to be debited
        if(account.balance >= amount){

            // substract the amount from the balance in the account
            let newBalance = Number(account.balance) - Number(amount)

            // updating the account with the new balance
            const UpdatedAccount = await Account.findOneAndUpdate({name: account.name}, {
                balance: newBalance
            })

            // creating a new expenses
            const newExpense = await Expense.create({type, description, amount, createdBy})
            res.status(200).json(newExpense)
        }
        
    }
    catch(error){
        // catching an error if any
        res.status(400).json(error.message)
    }
}  


//display all expense records
exports.getAllExpenses = async (req, res) =>{
    const allExpenses = await Expense.find({}).sort({createdAt: -1})
                    .then((allExpenses) => {
                        res.status(200).json(allExpenses)
                    })
                    .catch((err) => {
                        res.json({message : 'oOPs... cannot retrieve expense list at the moment', errror: err})
                    })
}

//display a single expense record
exports.getSingleExpense = async (req, res) =>{
    const { id } = req.params
    const singleExpense = await Expense.findById(id)
                    .then((singleExpense) => {
                        res.status(200).json(singleExpense)
                    })
                    .catch((err) => {
                        res.json({message : 'No such record', errror: err})
                    })
}

// disburse an expense record
exports.disburseExpense = async (req , res) => {
    const {id} = req.params
    const disbursedBy = req.user._id
    const updatedExpense = await Expense.findByIdAndUpdate(id, {isDisbursed: true, disbursedBy: disbursedBy})
                .then ((updatedExpense) => {
                    res.status(200).json(updatedExpense)
                })
                .catch((err) => {
                    res.json({message : "Error updating expense record", error:err})
                })
}

// approve an expense record
exports.approveExpense = async (req , res) => {
    let {id} = req.params
    const approvedBy = req.user._id
    const updatedExpense = await Expense.findByIdAndUpdate(id, {isApproved: true, approvedBy: approvedBy})
                .then ((updatedExpense) => {
                    res.status(200).json(updatedExpense)
                })
                .catch((err) => {
                    res.json({message : "Error updating expense record", error:err})
                })
}


// delete an expense record
exports.deleteExpense = async (req , res) =>{

    const {id} = req.params
    const deletedExpense = await Expense.findByIdAndDelete(id)
                .then((deletedExpense) =>{
                    res.status(200).json(deletedExpense)
                })
                .catch((err) => {
                    res.json({message: "Error deleting expense", error:err})
                })
}

module.exports = exports