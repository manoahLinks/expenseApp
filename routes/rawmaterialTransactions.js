const express = require('express'),
    router = express.Router(),
    controllers = require('../controllers/rawmaterialTransaction')

router.route('/')
    .get(controllers.getAllSupplies)
    .post(controllers.createSupply)      
    
router.route('/usage')
    .post(controllers.createUsage)    

router.route('/:id')
    .delete(controllers.DeleteSupply)    

module.exports = router