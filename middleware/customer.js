require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const {canViewCustomer} = require('../permissions/customers')

