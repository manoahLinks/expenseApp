const express = require('express'),
      router = express.Router(),
      controller = require('../controllers/user')


router.route('/')
    .get(controller.getAllUsers)
    .post(controller.loginUser)

router.route('/assign-role')
    .post(controller.assignRole)

router.route('/register')
    .post(controller.registerUser)

router.route('/:id/changeuserstate')
    .post(controller.changeUserState)
    
router.route('/:email')
    .get(controller.getSingleUserByEmail) 
    
router.route('/:id')
    .patch(controller.updateUser)
    .delete(controller.deleteUser)

module.exports = router