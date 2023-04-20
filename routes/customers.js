const express = require('express'),
        router = express.Router(),
        controllers = require('../controllers/customers'),
        {canViewCustomer} = require('../permissions/customers')


router.get('/', controllers.getAllCustomers)

router.route(`/`)
    .post(controllers.createCustomer)

router.route(`/:id`)
    .get(controllers.getSingleCustomer)
    .delete(controllers.deleteCustomer)    
    
module.exports = router    
