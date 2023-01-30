const express = require('express'),
        router= express.Router()


router.route('/')
    .get()
    .post()
    
    
router.route('/:id')
    .get()
    .patch()
    .delete()

module.exports = router