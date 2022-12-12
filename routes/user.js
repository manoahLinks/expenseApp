const express = require('express'),
      router = express.Router(),
      controller = require('../controllers/user')


router.route('/')
    .get(controller.getAllUsers)
    .post()

module.exports = router