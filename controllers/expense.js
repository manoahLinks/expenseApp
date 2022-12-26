const expenseDb = require('../models/expense'),
      mongoose = require('mongoose')


//create new expense
exports.addNewExpense = async (req, res) => {

    const {accountName ,type, description, amount} = req.body

    try{

        const account = await Account.findOne({name: accountName})

        if(!account){
            res.status(404).json({message: 'error in finding account'})
        }

        if(account.balance >= amount){

            let newBalance = Number(account.balance) - Number(amount)

            const UpdatedAccount = await Account.findOneAndUpdate({name: account.name}, {
                balance: newBalance
            })
            const newExpense = await Expense.create({type, description, amount})
            res.status(200).json(newExpense)
        }
        
    }
    catch(err){
        res.status(400).json({message:"Cannot create new record", error:err})
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

// update an expense record
exports.disburseExpense = async (req , res) => {
    let {id} = req.params
    const updatedExpense = await Expense.findByIdAndUpdate(id, {isDisbursed: true})
                .then ((updatedExpense) => {
                    res.status(200).json(updatedExpense)
                })
                .catch((err) => {
                    res.json({message : "Error updating expense record", error:err})
                })
}

// update an expense record
exports.approveExpense = async (req , res) => {
    let {id} = req.params
    const updatedExpense = await Expense.findByIdAndUpdate(id, {isApproved: true})
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