const mongoose = require('mongoose')


//setting up database schema
const expenseSchema = new mongoose.Schema({

    type :          {type: String,    required: true},
    description:    {type: String,    required: true},
    amount :        {type: Number,    required: true},
    isDisbursed:    {type: Boolean,   default:  false},
    isApproved:     {type: Boolean,   default:  false},
    createdBy:      {type: String},
    approvedBy:     {type: String},
    disbursedBy:    {type: String}


},{timestamps:true})


// creating a model
Expense = mongoose.model('Expense', expenseSchema)

//exporting my model
module.exports = Expense