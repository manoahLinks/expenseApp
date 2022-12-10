const express = require('express'),
      expensemodel = require('../models/expense'),
      controllers  = require('../controllers/expense'),
      router = express.Router()

router.route('/')
      .get(controllers.getAllExpenses)
      .post(controllers.addNewExpense)

router.route('/:id')
      .get(controllers.getSingleExpense)
      .patch(controllers.disburseExpense)
      .delete(controllers.deleteExpense)


module.exports = router;