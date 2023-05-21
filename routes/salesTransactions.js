const express = require('express'),
    router = express.Router(),
    controllers = require('../controllers/salesTransactions')

router.route('/')
    .get(controllers.getAllSalesTransactions)
    .post(controllers.createTransaction)

module.exports = router