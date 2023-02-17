const express = require('express'),
        router = express.Router({mergeParams: true}),
        controller = require('../controllers/transactions')


router.route('/')
    .get(controller.getAllTransactions)
    .post()
    
module.exports = router    