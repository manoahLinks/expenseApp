const express = require('express'),
      router = express.Router(),
      controller = require('../controllers/user')


router.route('/')
    .get(controller.getAllUsers)
    .post(controller.loginUser)

router.route('/register')
    .post(controller.registerUser)
    
router.route('/:email')
    .get(controller.getSingleUserByEmail)    

module.exports = router