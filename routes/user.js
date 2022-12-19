const express = require('express'),
      router = express.Router(),
      controller = require('../controllers/user')


router.route('/')
    .get(controller.getAllUsers)
    .post(controller.loginUser)

router.route('/register')
    .post(controller.registerUser)
    
router.route('/:id')
    .get(controller.getSingleUser)    

module.exports = router