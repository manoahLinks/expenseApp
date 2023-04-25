const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/productionRecords')


router.route('/')
    .get(controller.getAllRecords)
    .post(controller.createProductionRecord)

router.route('/:id')
    .get(controller.getSingleRecord)
    .post(controller.createProductionRecord)
    .patch(controller.updateRecord)
    .delete(controller.deleteRecord)

module.exports = router