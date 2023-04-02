const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/supplier')


router.route('/')
    .get(controller.getAllSuppliers)
    .post(controller.registerNewSupplier)    

router.route('/order')
    .post(controller.sendOrderToSupplier)

router.route(`/payment`)    
    .post(controller.paySupplier)

router.route('/:id')
    .get(controller.getSingleSupplier)
    .patch(controller.updateSupplierInformation)
    .delete(controller.deleteSupplier)    

module.exports = router