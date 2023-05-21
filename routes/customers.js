const express = require('express'),
        router = express.Router(),
        controllers = require('../controllers/customers'),
        {canViewCustomer} = require('../permissions/customers')


router.route(`/`)
    .get(controllers.getAllCustomers)
    .post(controllers.createCustomer)

router.route(`/:id`)
    .get(controllers.getSingleCustomer)
    .delete(controllers.deleteCustomer)    
    
module.exports = router    
