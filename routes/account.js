
const express = require('express'),
      router  = express.Router({mergeParams: true}),
      controller = require('../controllers/account')


router.route('/')
    .get(controller.getAllAccounts)
    .post(controller.createAccount)
    
router.route('/:id')
    .get(controller.findSingleAccount)
    .patch(controller.fundAccount)
    .delete(controller.deleteAccount)

router.route('/:id/transfer')
    .get()
    .patch(controller.transferToAnotherAccount)
    
module.exports = router    