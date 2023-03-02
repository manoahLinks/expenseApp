const express = require('express'),
    router = express.Router(),
    controllers = require('../controllers/supplies')

router.route('/')
    .get(controllers.getAllSupplies)
    .post(controllers.createSupply)   

router.route('/:id')
    .delete(controllers.DeleteSupply)    

module.exports = router