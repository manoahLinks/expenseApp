const express = require('express'),
        router = express.Router(),
        controller = require('../controllers/withdrawal')

router.route('/')
    .get(controller.getAllWithdrawals)
    
    
router.route('/:id')
    .get(controller.getSingleWithdrawal)
    .patch(controller.updateWithdrawal)
    .delete(controller.deleteWithdrawal)
    
module.exports = router    