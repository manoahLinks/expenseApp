const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/dbar')

router.route('/')
    .get(controller.getDbar)
    .post(controller.createDdbar)

router.route('/:id')
    .get()
    .delete(controller.deleteDbar)     
    
module.exports = router    
