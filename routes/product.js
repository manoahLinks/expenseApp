const express = require('express'),
        router= express.Router(),
        controller = require('../controllers/product')


router.route('/')
    .get(controller.getAllProducts)
    .post(controller.createProduct)
    
    
router.route('/:id')
    .get(controller.getSingleProduct)
    .patch(controller.updateProduct)
    .delete(controller.deleteProduct)

module.exports = router