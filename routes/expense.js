const express = require('express'),
      expensemodel = require('../models/expense'),
      controllers  = require('../controllers/expense'),
      router = express.Router()

router.route('/')
      .get(controllers.getAllExpenses)
      .post(controllers.addNewExpense)

router.route('/:id')
      .get(controllers.getSingleExpense)
      .put(controllers.updateExpense)
      .delete(controllers.deleteExpense)


module.exports = router;