const express = require('express'),
        router = express.Router(),
        controllers = require('../controllers/customers')


router.route(`/`)
    .get(controllers.getAllCustomers)
    .post(controllers.createCustomer)
    
    
module.exports = router    
