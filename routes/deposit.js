const express = require('express'),
        router = express.Router({mergeParams: true}),
        controller = require('../controllers/deposit')


router.route('/')
    .get(controller.getAllDeposits)
    .post()
    
module.exports = router    